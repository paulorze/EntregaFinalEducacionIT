import { createTheme } from "@mui/material";

export const themeLight = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f50057',
        },
        font: {
            // este es para las cosas sobre fondo claro que cambiaran a fondo oscuro
            main: '#000000',
            //este es para las cosas sobre fondo oscuro que quedan en fondo oscuro
            light: '#ffffff',
            dark: '#000000',
            contrastText: '#000000'
        },
        grey: {
            main: '#ede8e8'
        },
        success: {
            main: '#5be37f'
        }
    },
    components: {
        MuiDialog: {
            styleOverrides : {
                paper: {
                    backgroundColor: '#1976d2',
                    color: '#ffffff'
                }
            }
        }
    }
});