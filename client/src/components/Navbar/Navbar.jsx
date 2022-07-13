import style from './Navbar.module.css'
import {Link} from 'react-router-dom'

function Navbar (){
    return (
        <nav className={style.nav}>
            <Link to='/Home'>
                <h1>Home</h1>
            </Link>
            <Link to='/add_videogame'>
                <h2>Add videogame</h2>
            </Link>
        </nav>
    )
}


export default Navbar; 