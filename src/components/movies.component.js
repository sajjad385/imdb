import {useEffect, useState} from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../services/get-movies.service";
import _ from 'lodash'
import Pagination from "./common/pagination.component";
import getGenres from "../services/get-genres.service";
import Filter from "./common/filtering.component";

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [sortColumn, setSortColumn] = useState({
        path: 'id',
        order: 'asc'
    });
    const [activePage, setActivePage] = useState(1)
    const [pageCount, setPageCount] = useState(10)
    const [selectedGenre, setSelectedGenre] = useState("All Genres")

    useEffect(() => {
        const movies = getMovies();
        const genres = ["All Genres", ...getGenres()];
        setMovies(movies)
        setGenres(genres)
    }, [])

    const handleToggleRating = id => {

        const movies = [...movies]
        const movie = movies.find(movie => movie.id === id)
        movie.my_rating = !(movie.my_rating)
        setMovies(movies)
    }

    const handleSort = sortColumn => {
        setSortColumn(sortColumn)
    }

    const paginateMovies = movies => {
        const start = (activePage - 1) * pageCount
        return movies.slice(start, start + pageCount)
    }

    const filterMovies = () => {
        return movies.filter(movie => {
            if (selectedGenre === "All Genres") return true
            return movie.genres.includes(selectedGenre);
        })
    }

    const sortMovies = movies => {
        return _.orderBy(movies, [sortColumn.path], [sortColumn.order])
    }

    const handleClickPage = (activePage) => {
        setActivePage(activePage)
    }

    const handleClickFilter = (selectedGenre) => {
        setSelectedGenre(selectedGenre)
    }
    const filteredMovies = filterMovies()
    const paginatedMovies = paginateMovies(filteredMovies)
    const allMovies = sortMovies(paginatedMovies)
    const columns = [
        {
            label: 'Rank',
            path: 'id',
            sorting: true,
            content: (movie, key) => <td>{movie[key]}</td>
        },
        {
            label: 'Title',
            path: 'title',
            sorting: true,
            content: (movie, key) => <td>{movie[key]}</td>
        },
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
                                                 handleToggleRating={handleToggleRating}/></td>
        },
        {
            label: 'Action',
            path: 'handle',
            sorting: false,
            content: (movie, key) => <td>{movie[key]}</td>
        },
    ]
    return (
        <>
            <div className="container p-2">
                <div className="row">
                    <div className="col-2">
                        <Filter
                            items={genres}
                            selectedItem={selectedGenre}
                            onClickFilter={handleClickFilter}
                        />
                    </div>
                    <div className="col-8">
                        <div className='card-title'><h3>IMDb Movies</h3></div>
                        <Table body={allMovies} columns={columns} onSort={handleSort}
                               sortColumn={sortColumn}/>
                        <Pagination
                            totalItems={filteredMovies.length}
                            pageCount={pageCount}
                            activePage={activePage}
                            onClickPage={handleClickPage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Movies


