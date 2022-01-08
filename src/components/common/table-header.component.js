const TableHeader = (props) => {
    return (
        <>
            <thead>
            <tr>
                {
                    props.columns.map(column=> {
                        return (
                            <th scope="col">{column.label}</th>
                        )
                    })
                }
            </tr>
            </thead>
        </>
    )
}
export default TableHeader