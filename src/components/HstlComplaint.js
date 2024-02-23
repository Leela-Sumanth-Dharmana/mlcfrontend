import HstlNav from "./HstlNav";
import HstlDisplay from "./HstlDisplay";

import Axios from 'axios'
import { useEffect, useState } from "react";
function HstlComplaints(props){
    const [data,setData]=useState();
    useEffect(()=>{
        handleU()
    },[props.id])
    const Show=function(){
        try{
            return data.map((val,index)=>{
                return <HstlDisplay id={props.id} data={val} />
            })
        }
        catch{}
        
    }
    const handleS = () => {
        Axios.get("https://mlcbackend.onrender.com/route/gethstlcomplaintss")
            .then((res) => {
                if(res.status===200){
                    setData(res.data);
                    console.log(res)
                }
        })
        .catch((err)=>alert(err))
    }
    const handleU = () => {
        Axios.get("https://mlcbackend.onrender.com/route/gethstlcomplaintsu")
            .then((res) => {
                if(res.status===200){
                    setData(res.data);
                    console.log(res)
                }
        })
        .catch((err)=>alert(err))
    }
    return(<>
        <div>
            <HstlNav />
            <h1 class=" text text-center mt-2 text-dark">Complaints</h1>
            <div className="py-2"> 
            <div style={{alignItems:'center',justifyContent:'center'}} className="input-group text-center">
                <button onClick={handleS} className="btn btn-dark pr-1 mx-3" >
                    Solved
                </button>
                <button onClick={handleU} className="btn btn-dark pr-1 mx-3" >
                    Unsolved
                </button>
            </div>
                
            </div>
            {
                        Show()
                    }
            
        </div>
    </>)
}

export default HstlComplaints;