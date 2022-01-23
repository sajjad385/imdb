import {useState} from "react";

const Rating = ({handleToggleRating, rank, isRated}) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = () => {
        setIsHovered(true)
    }

    const handleHoverOut = () => {
        setIsHovered(false)
    }

    const getClassName = () => {
        let className = isRated ? 'fa fa-star' : 'fa fa-star-o'
        className += isHovered ? ' text-primary' : ''
        return className
    }

    const handleRating = () => {
        console.log('clicked')
    }
    return (
        <i
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            onClick={() => handleToggleRating(rank)}
            className={getClassName()}
        />
    );
}

export default Rating