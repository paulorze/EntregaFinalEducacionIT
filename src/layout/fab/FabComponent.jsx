import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import styles from './FabComponent.module.css';

const FabComponent = ({handleOpenModal}) => {
    return (
        <Fab
            color="success"
            className={styles.fab}
            onClick={handleOpenModal}
        >
            <AddIcon/>
        </Fab>
    );
};

export default FabComponent;