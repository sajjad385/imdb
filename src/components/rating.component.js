import {Component} from "react";

class Rating extends Component {
    state = {
        isHovered: false
    }

    handleHover = () => {
        this.setState({isHovered: true})
    }

    handleHoverOut = () => {
        this.setState({isHovered: false})
    }

    getClassName = () => {
        const {isRated} = this.props
        const {isHovered} = this.state
        let className = isRated ? 'fa fa-star' : 'fa fa-star-o'
        className += isHovered ? ' text-primary' : ''
        return className
    }

    handleRating =()=>{
        console.log('clicked')
    }

    render() {
        const {handleToggleRating,rank} = this.props
        return (
            <i
                onMouseOver={this.handleHover}
                onMouseOut={this.handleHoverOut}
                onClick={()=>handleToggleRating(rank)}
                className={this.getClassName()}
            />
        );
    }
}

export default Rating