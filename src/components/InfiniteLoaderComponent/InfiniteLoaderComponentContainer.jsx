import { useCallback, useEffect, useRef, useState } from "react";
import { getMoviesPaginated } from "../../services/movies.service";
import InfiniteLoaderComponent from "./InfiniteLoaderComponent";

const InfiniteLoaderComponentContainer = () => {
    const [currentPageToGet, setCurrentPageToGet] = useState(0);
    const [nextPage, setNextPage] = useState(true);
    const [loading, setLoading] = useState(true);
    const [moviesList, setMoviesList] = useState([]);

    const fetchMoreData = async () => {
        try {
            setLoading(prevdata => true);
            const data = await getMoviesPaginated(currentPageToGet);
            setMoviesList(prevData => {
                const resultArray = Array.from(new Set([...prevData, ...data.content].map(obj => obj.id))).map(id => [...prevData, ...data.content].find(obj => obj.id === id));
                return resultArray;
            });
            setLoading(false);
            setNextPage (prevData => !data.last);
        } catch (e) {
            setLoading(prevData =>false);
            console.log(e);
        };
    };

    useEffect(()=> {
        fetchMoreData();
    }, [currentPageToGet]);

    const observer = useRef();
    const lastBookElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && nextPage) {
                setCurrentPageToGet(prevData => prevData + 1);
            };
        });
        if (node) observer.current.observe(node)
    }, [loading, nextPage]);

    return (
        <InfiniteLoaderComponent
            moviesList={moviesList}
            loading={loading}
            lastBookElementRef={lastBookElementRef}
        />
    );
};

export default InfiniteLoaderComponentContainer;