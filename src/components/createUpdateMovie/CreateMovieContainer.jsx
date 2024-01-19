import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from "yup";
import CreateMovie from './CreateMovie';
import { createMovie } from '../../services/movies.service';
import { useSelector } from 'react-redux';

const CreateMovieContainer = ({openModal, handleCloseModal}) => {
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
                adult: "",
                backdropPath: "",
                genreIds: "",
                originalLanguage: "",
                overview: "",
                popularity: "",
                posterPath: "",
                releaseDate: "",
                title: "",
                video: "",
                voteAverage: "",
                voteCount: ""
            },
        onSubmit: async (data, { resetForm }) => {
            try {
                setLoading(prevData => true);
                const newMovie = {...data, adult : (data.adult=='true'), genreIds: data.genreIds.split(","), popularity: +data.popularity, video: (data.video == 'true'), voteAverage: +data.voteAverage, voteCount: +data.voteCount};
                await createMovie(newMovie, userData.jwt);
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
            backdropPath: Yup.string().required("Este campo es obligatorio."),
            genreIds: Yup.string().required("Este campo es obligatorio."),
            originalLanguage: Yup.string().required("Este campo es obligatorio."),
            overview: Yup.string().required("Este campo es obligatorio."),
            popularity: Yup.string().required("Este campo es obligatorio."),
            posterPath: Yup.string().required("Este campo es obligatorio."),
            releaseDate: Yup.string().required("Este campo es obligatorio."),
            title: Yup.string().required("Este campo es obligatorio."),
            voteAverage: Yup.string().required("Este campo es obligatorio."),
            voteCount: Yup.string().required("Este campo es obligatorio.")
        }),
        validateOnChange: false
    });
    

    return (
        <CreateMovie
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            loading={loading}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
            openAlert={openAlert}
            handleCloseAlert={handleCloseAlert}
        />
    );
};

export default CreateMovieContainer;