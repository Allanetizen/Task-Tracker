import PropTypes from 'prop-types'
const Button = ({ color, text }) => {
    
    const onClick = () => {
        console.log('Click')
    }
    return (

        <button onClick={onClick} style={{ backgroundColor: color }} className=''>{text}</button>

    )
}
Button.defaultProps = {
    color: 'steelBlue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,

}

export default Button