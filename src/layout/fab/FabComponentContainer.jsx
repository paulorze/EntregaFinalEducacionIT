import { useDispatch } from 'react-redux';
import FabComponent from './FabComponent';
import { openModal } from '../../redux/createProductSlice';

const FabComponentContainer = () => {
    const dispatcher = useDispatch()
    const handleOpenModal = () => {
        dispatcher(openModal());
    };

    return (
        <FabComponent
            handleOpenModal={handleOpenModal}
        />
    );
};

export default FabComponentContainer;