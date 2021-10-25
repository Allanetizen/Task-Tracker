import Proptypes from 'prop-types'
const Header = ({ title }) => {
    return (
        <header>
            <h1 style= {headingStyle}>{title}</h1>

        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: Proptypes.string.isRequired,
}
 //CSS in JavaScript
//const headingStyle = {
    //color: 'Red',
    //backgroundColor: 'black',

//}
export default Header