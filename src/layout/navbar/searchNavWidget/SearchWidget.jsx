import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';

const SearchWidget = ({theme, modificarParametroBusqueda, checkForEnter, searchStore}) => {
    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <IconButton
                        onClick={searchStore}
                    >
                        <SearchIcon
                            sx={{color: theme.palette.font.light}}
                        />
                    </IconButton>
                ),
            }}
            sx={{
                backgroundColor: theme.palette.primary.light,
                input: {color: theme.palette.font.light, padding: 1.5}
            }}
            onChange={modificarParametroBusqueda}
            onKeyDown={checkForEnter}
            autoFocus
            variant='filled'
        />
    );
};

export default SearchWidget;