import {Link} from 'react-router-dom';

function Landing (){
    return (
        <>
            <Link to='/home'>
                <h1>Lets play!</h1>
            </Link>
        </>
    )
}

export default Landing;