import './css/style.css'
import logo from './images/vitap4.jpg';
import logo2 from './images/logo.jpg';
import Axios from 'axios'
import { useState } from 'react';
import './style.css'
import { Link ,useNavigate } from "react-router-dom";
import { useEffect } from 'react';
function Login(props) {

    const [email, setEmail] = useState("");
    const [password,setPassword]=useState();
    const handleChange2=(event)=>{
        setPassword(event.target.value)
    }
    const handleChange=(event)=>{
        setEmail(event.target.value);
    }
    const navigate=useNavigate();
    const handleClick3=()=>{
        const data={'email':email,'password':password};
        Axios.post("https://mlcbackend.onrender.com/route/login",data)
        .then((res)=>{
            if(res.status===200){
                alert("Login Successful")
                console.log(res.data);
                props.getState(res.data);
                navigate('/home')
            }
            else if(res.status===201){
                alert("Incorrect Password");
            }
            else if(res.status===202){
                alert("Login Successful")
                navigate('/chome')
            }
            else if(res.status===203){
                alert("Login Successful");
                navigate('/hhome')
            }
        })
    }
    return (<>
        <div className="wrapper" style={{ backgroundImage: "url('./images/vitap.jpg')" }}>
            <div class="inner text-center">
                <div class="image-holder">
                    <img src={logo} alt="" />
                </div>
                <form>
                    <img style={{ height: "150px" }} className='mb-5 mx-auto' src={logo2} />
                    <h3 className='text-primary'>Welcome</h3>
                    <input onChange={handleChange} style={{ maxWidth: "400px", height: "40px", border: '2px solid lightgray' }} type="email" placeholder='Email Address' className="form-control text-center" aria-describedby="button-addon2" />

                    <div className="input-group">
                        <input style={{ maxWidth: "400px", height: "40px", border: '2px solid lightgray' }} defaultValue={password} type="password" onChange={handleChange2} placeholder='Password' className="form-control mb-3 ml-auto text-center" aria-describedby="button-addon2" />
                        
                    </div>
                    <button style={{ height: '40px', width: "120px" }}  className="btn btn-primary mr-auto" onClick={handleClick3} id="button-addon2">Login</button>
                </form>
            </div>
        </div>
    </>)
}

export default Login;