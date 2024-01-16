import { useTheme } from "@mui/material";
import { useState } from 'react';
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const NavbarContainer = ()=> {
    const theme = useTheme();

    // ESTO CORRESPONDE AL USUARIO AUTENTICADO
    const userData = useSelector(store=>store.userData)
    const rolAdmin = import.meta.env.VITE_ADMINKEY;

    // ESTO CORRESPONDE AL MENU RESPONSIVO DESPLEGABLE
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // ESTO CORRESPONDE AL MENU DE PERFIL
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    
    return  (
        <Navbar
            anchorElNav = {anchorElNav}
            handleOpenNavMenu = {handleOpenNavMenu}
            handleCloseNavMenu = {handleCloseNavMenu}
            anchorElUser = {anchorElUser}
            handleOpenUserMenu = {handleOpenUserMenu}
            handleCloseUserMenu = {handleCloseUserMenu}
            theme = {theme}
            role={userData?.role}
            rolAdmin={rolAdmin}
        />
    );
};

export default NavbarContainer;