import { useNavigate } from "react-router-dom";
import SearchWidget from "./SearchWidget"
import { useState } from "react";
import { useTheme } from "@mui/material";

const SearchWidgetContainer = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    
    // OBTENEMOS LO QUE INGRESO EL USUARIO EN LA BARRA DE BUSQUEDA
    const [parametroBusqueda, setParametroBusqueda] = useState('?search=');
    const modificarParametroBusqueda = (event) => {
        setParametroBusqueda('?search=' + event.target.value)
    };

    const checkForEnter = (e)=>{
        e.key === 'Enter' && searchStore();
    };

    const searchStore = () => {
        navigate('/'+parametroBusqueda);
    };

    return (
        <SearchWidget
            theme = {theme}
            modificarParametroBusqueda = {modificarParametroBusqueda}
            checkForEnter={checkForEnter}
            searchStore={searchStore}
        />
    );
};

export default SearchWidgetContainer;