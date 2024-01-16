import { Outlet } from "react-router-dom";
import NavbarContainer from "./navbar/NavbarContainer";
import FooterContainer from "./footer/FooterContainer";

const Layout = () => {
    return (
        <>
            <NavbarContainer/>
            <Outlet/>
            <FooterContainer/>
        </>
    );
};

export default Layout;