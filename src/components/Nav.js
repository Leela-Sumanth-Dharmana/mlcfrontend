import NavImage from './images/navimg.png';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <Link to='/home' className="navbar-brand ml-2"><img style={{width:'120px',height:'45px'}} className='nav-image' id='nav-image' alt='Q' src={NavImage} /></Link>
                    <div className="">{props.name}</div>
                    <button className="navbar-toggler text-center ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto fw-bold">
                            <li class="nav-item text-center">
                                {/* <a class="nav-link" href="#">Log Complaints</a> */}
                                <Link to={'/newcomplaint'} className='nav-link'>Log Complaints</Link>
                            </li>
                            <li class="nav-item text-center">
                                {/* <a class="nav-link" href="#">My Complaints</a> */}
                                <Link to={'/mycomplaint'} className='nav-link'>My Complaints</Link>
                            </li>
                            <li class="nav-item text-center">
                                <Link to={'/contact'} className='nav-link'>Contact Details</Link>
                            </li>
                            <li class="nav-item text-center">
                            <Link className='nav-link' to={'/'}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;