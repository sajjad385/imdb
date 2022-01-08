import {Component} from "react";
import {render} from "react-dom";

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container">
                        <a className="navbar-brand font-weight-bold" href="#" style={{'color': 'white'}}>IMDB</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                    </div>
                </nav>
            </>
        );
    }
}