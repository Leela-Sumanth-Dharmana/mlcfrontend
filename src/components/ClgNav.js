import NavImage from './images/navimg.png';
import { Link } from 'react-router-dom';
function ClgNav(){
    return(<>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id='nav'>
                
                <Link to='/chome' className="navbar-brand ml-2"><img style={{width:'120px',height:'45px'}} className='nav-image' id='nav-image' alt='Q' src={NavImage} /></Link>
                <button className="navbar-toggler text-center ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item text-center">
                                {/* <a class="nav-link" href="#">Log Complaints</a> */}
                                <Link to={'/clgcomplain'} className='nav-link'>Complaints</Link>
                            </li>
                            <li class="nav-item text-center">
                                <Link className='nav-link' to={'/'}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                
            </nav>
    </>)
}

export default ClgNav;