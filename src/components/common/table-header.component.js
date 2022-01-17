const TableHeader = ({columns, onSort, sortColumn}) => { // sortColumn ={ path:rank, order: desc/asc }
    const handleSort = ({path,sorting}) => {
        if (!sorting) return
        if (sortColumn.path === path) {
            if (sortColumn.order === 'asc') {
                onSort({path, order: 'desc'})
            } else {
                onSort({path, order: 'asc'})
            }
        } else {
            onSort({path, order: 'asc'})
        }
    }

    const getIcon = path => {
        if (sortColumn.path === path) {
            if (sortColumn.order === 'asc') {
                return <i className='fa fa-sort-down'/>
            } else {
                return <i className='fa fa-sort-up'/>
            }
        } else {
            return null

        }

    }
    return (
        <>
            <thead>
            <tr>
                {
                    columns.map(column => {
                        return (
                            <th onClick={() => handleSort(column)} scope="col">{column.label}
                                {
                                    getIcon(column.path)
                                }
                            </th>
                        )
                    })
                }
            </tr>
            </thead>
        </>
    )
}
export default TableHeader