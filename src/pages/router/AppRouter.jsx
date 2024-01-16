import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "../../layout/Layout";
import { themeDark } from "../../utils/theme/themeDark";
import { themeLight } from "../../utils/theme/themeLight";
import Error404Container from "../error404/Error404Container";
import { routes } from "./menuRoutes";

const AppRouter = () => {
    const theme = useSelector(store=>store.theme)

    return (
        <ThemeProvider
            theme={theme ? themeDark : themeLight}
        >
            <Routes>
                <Route element={<Layout/>}>
                    {(routes).map(({key, path, Element})=>(
                        <Route
                            key={key}
                            path={path}
                            element={<Element />}
                        />
                    ))}
                    {/* <Route element={<ProtectUserRoutes/>} >
                        <Route path="/profile" element={<ProfileContainer/>} />
                    </Route>             */}
                </Route>
                <Route path='/*' element={<Error404Container/>} />
            </Routes>
        </ThemeProvider>
    );
};

export default AppRouter;