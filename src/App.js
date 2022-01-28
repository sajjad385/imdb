import Navbar from "./components/navbar.component";
import Movies from "./components/movies.component";
import {Routes, Navigate, Route} from "react-router-dom";
import Home from "./components/home.component";
import CreateMovie from "./components/create-movie.component";
import Signup from "./components/signup.component";
import Signin from "./components/signin.component";
import NotFound from "./components/not-found.component";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/create-movie' element={<CreateMovie/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/404' element={<NotFound/>}/>
                <Route path="*"
                       element={<Navigate to="/404"/>}/>
            </Routes>
        </>
    );
}
export default App