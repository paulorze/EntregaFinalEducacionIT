import { useTheme } from "@mui/material";
import { useState } from 'react';
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../redux/userSlice";
import { resetAdmin } from "../../redux/adminSlice";

const NavbarContainer = ()=> {
    const theme = useTheme();

    // ESTO CORRESPONDE AL USUARIO AUTENTICADO
    const userData = useSelector(store=>store.userData)
    const dispatcher = useDispatch();

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
    
    const logout = () => {
        dispatcher(resetUser());
        dispatcher(resetAdmin());
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
            logout={logout}
        />
    );
};

export default NavbarContainer;