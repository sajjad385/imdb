import {Component} from "react";
import Table from "./common/table.component";

export default class Students extends Component {
    state = {
        students: [
            {id: 1, first_name: 'Sajjad', last_name: 'Hossain', cgpa: 3.64,'year':'1st'},
            {id: 2, first_name: 'Rashed', last_name: 'Alam', cgpa: 3.66,'year':'1st'},
            {id: 3, first_name: 'Ikhtiar', last_name: 'Uddin', cgpa: 3.65,'year':'1st'},
        ]
    }

    render() {
        const columns = [
            {label: 'Student ID', path: 'id', content: item => <th>{item}</th>},
            {label: 'First Name', path: 'first_name', content: item => <td>{item}</td>},
            {label: 'Last Name', path: 'last_name', content: item => <td>{item}</td>},
            {label: 'CGPA', path: 'cgpa', content: item => <td>{item}</td>},
            {label: 'Year', path: 'year', content: item => <td>{item}</td>},
        ]
        return (
            <>
                <div className="container p-2">
                    <div className='card-title'><h3>Student List</h3></div>
                    <Table body={this.state.students} columns={columns}/>
                </div>
            </>
        )
    }
}