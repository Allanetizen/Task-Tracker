import Proptypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button color ='green' text ='Hello'/>

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