import './css/style.css'
import logo from './images/vitap4.jpg';
import logo2 from './images/logo.jpg';
import Axios from 'axios'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
function SignUp1() {
    const [email, setEmail] = useState("");
    const [flag, setFlag] = useState(false);
    const [flag1, setFlag1] = useState(false);
    const [otp, setotp] = useState();
    const [password, setPassword] = useState();
    const handleChange = (event) => {
        setEmail(event.target.value);
    }
    const navigate=useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        const data = { 'email': email }
        Axios.post("https://mlcbackend.onrender.com/route/createuser", data)
            .then((res) => {
                if (res.status === 200) {
                    setFlag(true);
                    
                }
                else if (res.status === 202) {
                    alert("Login only with the college email ID")
                }
                else if (res.status === 201) {
                    alert("Already Registered");
                }
            })
            .catch((err) => {

            })
    }
    const handleChange2 = (event) => {
        setPassword(event.target.value)
    }
    const handleChange1 = (event) => {
        setotp(event.target.value)
    }
    const handleClick1 = (e) => {
        e.preventDefault()
        const data = { 'email': email, 'otp': otp }
        Axios.post("https://mlcbackend.onrender.com/route/verifyuser", data)
            .then((res) => {
                if (res.status === 200) {
                    setFlag1(true);
                    setFlag(false);
                }
                else {
                    alert("Invalid OTP")
                }
            })
            .catch((err) => {
                alert("Invalid OTP");
            })
    }
    const handleClick2 = (e) => {
        e.preventDefault()
        const data = { 'email': email, 'password': password };
        Axios.post("https://mlcbackend.onrender.com/route/create", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Signup Successful");
                    navigate('/login')
                }
            })
            .catch((error) => { })
    }
    return (<>
        <div class="wrapper" style={{ backgroundImage: "url('./images/vitap.jpg')" }}>
            <div class="inner text-center">
                <div class="image-holder">
                    <img src={logo} alt="" />
                </div>
                <form>
                    <img style={{ height: "150px"}}  className='mb-5 mx-auto' src={logo2} />
                    <h3 className='text-primary'>Sign Up</h3>


                    <div className="input-group">
                        <input onChange={handleChange} style={{ maxWidth: "400px", height: "40px", border: '2px solid lightgray' }} type="email" placeholder='Email Address' className="form-control text-center" aria-describedby="button-addon2" />
                        <button onClick={handleClick} style={{ height: '40px', width: "120px" }} className="btn btn-primary mr-auto" id="button-addon2">Send OTP</button>
                    </div>
                    {flag ? (<>
                        <p className='message'></p>
                        <div className="input-group">
                            <input style={{ maxWidth: "400px", height: "40px", border: '2px solid lightgray' }} defaultValue={otp} type="email" onChange={handleChange1} className="form-control ml-auto" aria-describedby="button-addon2" />
                            <button style={{ height: '40px', width: "120px" }} className="btn btn-primary mr-auto" onClick={handleClick1} id="button-addon2">Verify OTP</button>
                        </div>
                    </>
                    ) : (<></>)}
                    {flag1 ? (<>
                        <p className='message'></p>
                        <div className="input-group">
                            <input placeholder='Set Password' style={{ maxWidth: "400px", height: "40px", border: '2px solid lightgray' }} defaultValue={password} type="password" onChange={handleChange2} className="form-control ml-auto" aria-describedby="button-addon2" />
                            
                        </div>
                        <button style={{ height: '40px', width: "120px" }} className="btn btn-primary mr-auto mt-3" onClick={handleClick2} id="button-addon2">Sign Up</button>
                    </>) : (null)}

                </form>
            </div>
        </div>
    </>)
}

export default SignUp1;