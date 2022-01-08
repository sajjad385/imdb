const TableBody = ({data,columns}) => {
    return (
        <>
            <tbody>
            {
                data.map(row => {
                    return (
                        <tr>
                            {
                                columns.map(column => {
                                    return column.content(row[column.path])
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </>
    )
}
export default TableBody