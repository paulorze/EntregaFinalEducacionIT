import { useFormik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from "yup";
import UpdateMovie from './UpdateMovie';
import { updateMovie } from '../../services/movies.service';

const UpdateMovieContainer = ({openModal, handleCloseModal, movie}) => {
    const userData = useSelector(store=>store.userData);
    // ESTO ES PARA LA ALERTA DE PRODUCTO SUBIDO EXITOSAMENTE
    const [loading, setLoading] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const handleOpenAlert = ()=> {
        setOpenAlert(true);
    };
    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    // ESTO ES PARA EL MANEJO DEL FORM
    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
                overview: movie.overview,
                popularity: movie.popularity,
                posterPath: movie.posterPath,
                voteAverage: movie.voteAverage,
                voteCount: movie.voteCount
            },
        onSubmit: async (data, { resetForm }) => {
            try {
                setLoading(prevData => true);
                const updatedMovie = {id: movie.id, overview: data.overview, popularity: +data.popularity, posterPath: data.posterPath, voteAverage: +data.voteAverage, voteCount: +data.voteCount}
                await updateMovie(updatedMovie, updatedMovie.id, userData.jwt);
                handleOpenAlert();
                resetForm();
                handleCloseModal();
                setLoading(prevData => false);
            } catch (e) {
                console.log(e);
                setLoading(prevData => false);
            };
        },
        validationSchema: Yup.object({
            overview: Yup.string().required("Este campo es obligatorio."),
            popularity: Yup.string().required("Este campo es obligatorio."),
            posterPath: Yup.string().required("Este campo es obligatorio."),
            voteAverage: Yup.string().required("Este campo es obligatorio."),
            voteCount: Yup.string().required("Este campo es obligatorio.")
        }),
        validateOnChange: false
    });

    return (
        <UpdateMovie
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            movie={movie}
            loading={loading}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
            openAlert={openAlert}
            handleCloseAlert={handleCloseAlert}
        />
    );
};

export default UpdateMovieContainer;