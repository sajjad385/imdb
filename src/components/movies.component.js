import {Component} from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../services/get-movies.service";
import _ from 'lodash'

export default class Movies extends Component {
    state = {
        movies: [],
        sortColumn:{
            path : 'id',
            order: 'asc'
        }
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

    handleSort = sortColumn => {
        this.setState({...this.state,sortColumn})
    }

    sortMovies =  movies =>{
        const { sortColumn } = this.state
        return _.orderBy(movies, [sortColumn.path], [sortColumn.order])
    }

    render() {
        const movies = this.sortMovies(this.state.movies)
        const columns = [
            {label: 'Rank', path: 'id', sorting:true, content: (movie,key) => <td>{movie[key]}</td>},
            {label: 'Title', path: 'title',  sorting:true, content:  (movie,key) => <td>{movie[key]}</td>},
            {label: 'Rating', path: 'rating', sorting:false, content:  (movie,key) => <td><i className='fa fa-star'/> {movie[key]}</td>},
            {label: 'My Rating', path: 'my_rating', sorting:false, content:  (movie,key) => <td><Rating isRated={movie[key]} rank={movie.id} handleToggleRating={this.handleToggleRating}/></td>},
            {label: 'Action', path: 'handle',  sorting:false, content:  (movie,key) => <td>{movie[key]}</td>},
        ]

        return (
            <>
                <div className="container p-2">
                    <div className='card-title'><h3>IMDb Movies</h3></div>
                    <Table body={movies} columns={columns} onSort={this.handleSort} sortColumn={this.state.sortColumn}/>
                </div>
            </>
        )
    }
}