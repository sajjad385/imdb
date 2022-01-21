const Filter = ({items, selectedItem, onClickFilter}) => {
    return (
        <ul className='list-group'>
            {items.map(item => {
                return <li
                    className={selectedItem === item ? 'list-group-item active' : 'list-group-item'}
                    onClick={() => onClickFilter(item)}
                >{item}</li>
            })}

        </ul>
    )
}
export default Filter