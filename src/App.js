import {Component} from "react";
import Navbar from "./components/navbar.component";
import Movies from "./components/movies.component";
import Students from "./components/students.component";

export default class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Movies/>
                <Students/>
            </>
        );
    }
}
