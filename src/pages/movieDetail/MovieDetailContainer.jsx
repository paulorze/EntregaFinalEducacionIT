import { useTheme } from "@mui/material";
import MovieDetail from "./MovieDetail";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieByID } from "../../services/movies.service";
import { useSelector } from "react-redux";

const MovieDetailContainer = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const id = useParams();
    const etiquetas = [
        "Nefasta",
        "Horrible",
        "Malarda",
        "Pobretona",
        "Ni Tan Mal",
        "Zafa",
        "Aprobada",
        "Buenarda",
        "Excelente",
        "Nashe"
    ]

    const [label, setLabel] = useState("Nashe");
    const handleSetLabel = (voteAverage) => {
        setLabel(prevData => etiquetas[parseInt(voteAverage)])
    }

    const [movie, setMovie] = useState({})
    useEffect(()=> {
        getMovieByID(id.id)
            .then(data=> {
                setMovie(prevData => data);
                handleSetLabel(data.voteAverage);
                setLoading(false);
            })
            .catch(e=> {
                navigate('/');
            });
    }, [id]);

    const admin = useSelector(store=>store.admin);
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(prevData=>true);
    };
    const handleCloseModal = ()=> {
        setOpenModal(prevData=>false);
    };

    return (
        <MovieDetail
            theme={theme}
            loading={loading}
            movie={movie}
            label={label}
            admin={admin}
            openModal={openModal}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
        />
    );
};

export default MovieDetailContainer;