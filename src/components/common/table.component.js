import TableHeader from "./table-header.component";
import TableBody from "./table-body.component";

const Table = ({body,columns}) => {
    return (
        <>
            <div className="container p-2">
                <table className="table table-bordered">
                    <TableHeader columns={columns}/>
                    <TableBody data={body} columns={columns}/>
                </table>
            </div>
        </>
    )
}
export default Table