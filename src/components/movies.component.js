import {Component} from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../services/get-movies.service";

export default class Movies extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        const movies = getMovies();
        this.setState({movies})
    }

    handleToggleRating = id => {
        const movies = [...this.state.movies]
        const movie = movies.find(movie => movie.id === id)
        movie.my_rating = !(movie.my_rating)
        this.setState({ movies })
    }

    render() {
        const columns = [
            {label: 'Rank', path: 'id', content: (movie,key) => <td>{movie[key]}</td>},
            {label: 'Title', path: 'title', content:  (movie,key) => <td>{movie[key]}</td>},
            {label: 'Rating', path: 'rating', content:  (movie,key) => <td><i className='fa fa-star'/> {movie[key]}</td>},
            {label: 'My Rating', path: 'my_rating', content:  (movie,key) => <td><Rating isRated={movie[key]} rank={movie.id} handleToggleRating={this.handleToggleRating}/></td>},
            {label: 'Action', path: 'handle', content:  (movie,key) => <td>{movie[key]}</td>},
        ]

        return (
            <>
                <div className="container p-2">
                    <div className='card-title'><h3>IMDb Top 5 Movies</h3></div>
                    <Table body={this.state.movies} columns={columns}/>
                </div>
            </>
        )
    }
}