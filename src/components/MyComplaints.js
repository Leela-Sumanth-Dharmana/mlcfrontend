// import icon from './water.jpg';

import Nav from "./Nav";
import Axios from 'axios'
import { useEffect, useState } from "react";
import Display from "./Display";
function MyComplaints(props) {
    const [data, setData] = useState();
    useEffect(() => {
        handleA();
    }, [props.id])
    const handleA=()=>{
        Axios.get("https://mlcbackend.onrender.com/route/getcomplaints/" + props.id)
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data);
                    console.log(res)
                }
            })
            .catch((err) => { })
    }
    const Show = function () {
        try {
            return data.map((val, index) => {
                return <Display data={val} />
            })
        }
        catch { }

    }
    const handleC = () => {
        Axios.get("https://mlcbackend.onrender.com/route/getcomplaintss/" + props.id)
            .then((res) => {
                if(res.status===200){
                    setData(res.data);
                    console.log(res)
                }
        })
        .catch((err)=>alert(err))
    }
    const handleP = () => {
        Axios.get("https://mlcbackend.onrender.com/route/getcomplaintsp/" + props.id)
            .then((res) => {
                if(res.status===200){
                    setData(res.data);
                    console.log(res)
                }
        })
        .catch((err)=>alert(err))
    }
    return (
        <div>
            <Nav name={props.name} />
            <h1 class=" text text-center mt-2 text-dark">My Complaints</h1>
            <div className="py-2">
                <div style={{ alignItems: 'center', justifyContent: 'center' }} className="input-group text-center">
                    <button onClick={handleA} className="btn btn-dark mx-3">
                        All
                    </button>
                    <button onClick={handleC} className="btn btn-dark mx-3" >
                        Completed
                    </button>
                    <button onClick={handleP} className="btn btn-dark mx-3" >
                        Pending
                    </button>
                </div>

            </div>
            {
                Show()
            }

        </div>
    )
}

export default MyComplaints;