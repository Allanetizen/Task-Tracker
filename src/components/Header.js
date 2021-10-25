import Proptypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click!')
    }
    return (
        <header>
            <h1>{title}</h1>
            <Button color ='green' text ='Add' onClick ={onClick}/>

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