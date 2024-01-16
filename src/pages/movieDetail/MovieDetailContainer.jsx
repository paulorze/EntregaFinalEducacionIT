import { useTheme } from "@mui/material";
import MovieDetail from "./MovieDetail";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieByID } from "../../services/movies.service";

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

    return (
        <MovieDetail
            theme={theme}
            loading={loading}
            movie={movie}
            label={label}
        />
    );
};

export default MovieDetailContainer;