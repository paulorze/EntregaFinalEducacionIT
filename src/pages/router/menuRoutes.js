import AboutContainer from "../about/AboutContainer";
import HomeContainer from "../home/HomeContainer";
import LoginContainer from "../login/LoginContainer";
import MovieDetailContainer from "../movieDetail/MovieDetailContainer";

export const routes = [
    {
        key: 'Home',
        path: '/',
        Element: HomeContainer
    },
    {
        key: 'MovieDetail',
        path: '/movie/:id',
        Element: MovieDetailContainer
    },
    {
        key: 'Login',
        path: '/login',
        Element: LoginContainer
    },
    {
        key: 'About',
        path: '/about',
        Element: AboutContainer
    }
];