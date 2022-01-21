import {Component} from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../services/get-movies.service";
import _ from 'lodash'
import Pagination from "./common/pagination.component";
import getGenres from "../services/get-genres.service";
import Filter from "./common/filtering.component";

export default class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        sortColumn: {
            path: 'id',
            order: 'asc'
        },
        activePage: 1,
        pageCount: 10,
        selectedGenre: "All Genres"
    }

    componentDidMount() {
        const movies = getMovies();
        const genres = ["All Genres", ...getGenres()];
        this.setState({...this.state, movies,genres})
    }

    handleToggleRating = id => {

        const movies = [...this.state.movies]
        const movie = movies.find(movie => movie.id === id)
        movie.my_rating = !(movie.my_rating)
        this.setState({...this.state, movies})
    }

    handleSort = sortColumn => {
        this.setState({...this.state, sortColumn})
    }

    paginateMovies = movies => {
        const {activePage, pageCount} = this.state
        const start = (activePage - 1) * pageCount
        return movies.slice(start, start + pageCount)
    }

    filterMovies = () =>{
        const {movies, selectedGenre}= this.state
       return movies.filter(movie =>{
            if (selectedGenre === "All Genres") return true
            return movie.genres.includes(selectedGenre);
        })
    }

    sortMovies = movies => {
        const {sortColumn} = this.state
        return _.orderBy(movies, [sortColumn.path], [sortColumn.order])
    }

    handleClickPage = (activePage) => {
        this.setState({...this.state, activePage})
    }

    handleClickFilter = (selectedGenre) => {
        this.setState({...this.state, selectedGenre})
    }

    render() {
        const filterMovies = this.filterMovies()
        const paginatedMovies = this.paginateMovies(filterMovies)
        const movies = this.sortMovies(paginatedMovies)
        const columns = [
            {label: 'Rank', path: 'id', sorting: true, content: (movie, key) => <td>{movie[key]}</td>},
            {label: 'Title', path: 'title', sorting: true, content: (movie, key) => <td>{movie[key]}</td>},
            {
                label: 'Rating',
                path: 'rating',
                sorting: false,
                content: (movie, key) => <td><i className='fa fa-star'/> {movie[key]}</td>
            },
            {
                label: 'My Rating',
                path: 'my_rating',
                sorting: false,
                content: (movie, key) => <td><Rating isRated={movie[key]} rank={movie.id}
                                                     handleToggleRating={this.handleToggleRating}/></td>
            },
            {label: 'Action', path: 'handle', sorting: false, content: (movie, key) => <td>{movie[key]}</td>},
        ]

        return (
            <>
                <div className="container p-2">
                   <div className="row">
                       <div className="col-2">
                           <Filter
                               items={this.state.genres}
                               selectedItem={this.state.selectedGenre}
                               onClickFilter={this.handleClickFilter}
                           />
                       </div>
                       <div className="col-8">
                           <div className='card-title'><h3>IMDb Movies</h3></div>
                           <Table body={movies} columns={columns} onSort={this.handleSort} sortColumn={this.state.sortColumn}/>
                           <Pagination
                               totalItems={filterMovies.length}
                               pageCount={this.state.pageCount}
                               activePage={this.state.activePage}
                               onClickPage={this.handleClickPage}
                           />
                       </div>
                   </div>
                </div>
            </>
        )
    }
}