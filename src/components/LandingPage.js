import { Link } from "react-router-dom";
import logo from './images/logo2.png'
function LandingPage(){
    return(<>
        <div style={{height:'100vh'}} className="row">
            <div style={{color:'white',backgroundColor:'#9bafd9'}}  className="col-lg-7 col-md-12 mx-auto">
                {/* <img className="mx-auto" style={{width:'350px',height:'350px'}} src={logo} /> */}
                <h2 className="mt-5 ml-3">VIT-AP UNIVERSITY</h2>

                <h3 className="text-center" style={{marginTop:"140px"}}>Feedback Symphony</h3>
                <p className="mt-5 text-center">Share your thoughts, big or small,<br /> and make your voice heard.</p>
            </div>
            <div style={{alignItems:'center',justifyContent:'center',backgroundColor:'#103783',color:'white'}} className="col-lg-5 col-md-12 ">
                <div style={{height:'230px'}}></div>
                <div  className="my-auto">
                <h3 className="text-center mb-5">Get Started</h3>
                {/* <button className="btn btn-primary">Sign In</button>
                <button className="btn btn-primary">Sign Up</button> */}
                <div className="input-group text-center">
                    <div className="mx-auto" style={{alignItems:'center',justifyContent:'center'}} >
                    <button style={{backgroundColor:'green',color:'white',maxWidth:'150px'}} className="btn  mr-3"><Link style={{textDecoration:'none'}} to='/login' className="text-light">Login</Link></button>
                <button style={{backgroundColor:'green',color:'white',maxWidth:'150px'}} className="btn "><Link style={{textDecoration:'none'}} to='/signup' className="text-light">Sign Up</Link></button> 
                    </div>
                    <div style={{maxHeight:'260px' , minHeight:'70px'}}></div>
                  
            </div>
                </div>
                
            </div>
            
        </div>
    </>)
}

export default LandingPage;