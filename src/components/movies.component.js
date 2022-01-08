import {Component} from "react";
import Table from "./common/table.component";

export default class Movies extends Component {
    state = {
        movies: [
            {id: 1, title: 'The Shawshank Redemption', rating: '9.2', my_rating: ''},
            {id: 2, title: 'The Shawshank Redemption', rating: '9.2', my_rating: ''},
            {id: 3, title: 'The Shawshank Redemption', rating: '9.2', my_rating: ''}
        ]
    }

    render() {
        const columns = [
            {label: 'ID', path: 'id', content: item => <td>{item}</td>},
            {label: 'Title', path: 'title', content: item => <td>{item}</td>},
            {label: 'Rating', path: 'rating', content: item => <td>{item}</td>},
            {label: 'Rating', path: 'my_rating', content: item => <td>{item}</td>},
        ]

        return (
            <>
                <div className="container p-2">
                    <div className='card-title'><h3>Movie List</h3></div>
                    <Table body={this.state.movies} columns={columns}/>
                </div>
            </>
        )
    }
}