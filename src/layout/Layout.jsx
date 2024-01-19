import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import CreateMovieContainer from '../components/createUpdateMovie/CreateMovieContainer';
import { closeModal } from '../redux/createProductSlice';
import FabComponentContainer from './fab/FabComponentContainer';
import FooterContainer from "./footer/FooterContainer";
import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
    const admin = useSelector(store=>store.admin);
    const openModal = useSelector(store => store.createProduct);
    const dispatcher = useDispatch();
    const handleCloseModal = () => {
        dispatcher(closeModal());
    };

    return (
        <>
            <NavbarContainer/>
            <Outlet/>
            {
                admin
                    && <FabComponentContainer/>
            }
            <CreateMovieContainer
                openModal={openModal}
                handleCloseModal={handleCloseModal}
            />
            <FooterContainer/>
        </>
    );
};

export default Layout;