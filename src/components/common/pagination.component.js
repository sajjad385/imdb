import _ from 'lodash'

const Pagination = ({totalItems, pageCount, activePage, onClickPage}) => {
    const totalPages = Math.ceil(totalItems / pageCount);
    const pages = _.range(1, totalPages + 1, 1)

    if (totalItems <=pageCount) return null
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={activePage === 1 ? 'page-item disabled' : 'page-item'}
                    onClick={() => activePage - 1 >= 1 ? onClickPage(activePage - 1) : ''}>
                    <a className="page-link" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                {
                    pages.map(page => {
                        return (
                            <li className={activePage === page ? 'page-item active' : 'page-item'}
                                onClick={() => onClickPage(page)}>
                                <a className="page-link"> {page} </a>
                            </li>
                        )
                    })
                }

                <li className={activePage === totalPages ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link"
                       onClick={() => activePage + 1 <= totalPages ? onClickPage(activePage + 1) : ''}>Next</a>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination