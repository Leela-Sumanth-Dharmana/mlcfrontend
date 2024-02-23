import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios'
function ClgDisplay(props) {
    const [data, setData] = useState(props.data);
    const encodedData = encodeURIComponent(JSON.stringify(data));
    const handleW=()=>{
        const val={"id":props.id,"place":props.data.place,"issue":props.data.issue,"description":props.data.description,"image":props.data.image,"status":"1"}
        Axios.put("https://mlcbackend.onrender.com/route/updatestatus/"+props.data._id,val)
        .then((res)=>{

        })
        .catch((err)=>alert(err))
    }
    const handleO=()=>{
        const val={"id":props.id,"place":props.data.place,"issue":props.data.issue,"description":props.data.description,"image":props.data.image,"status":"2"}
        Axios.put("https://mlcbackend.onrender.com/route/updatestatus/"+props.data._id,val)
        .then((res)=>{

        })
        .catch((err)=>alert(err))
    }
    const handleS=()=>{
        const val={"id":props.id,"place":props.data.place,"issue":props.data.issue,"description":props.data.description,"image":props.data.image,"status":"3"}
        Axios.put("https://mlcbackend.onrender.com/route/updatestatus/"+props.data._id,val)
        .then((res)=>{

        })
        .catch((err)=>alert(err))
    }
    return (<>
    
        <div class="card mb-3 shadow-sm mx-auto" style={{ maxWidth: "70%", marginLeft: "30px" }}>
            <div class="row no-gutters">
                <div class="col-md-3">
                    <img src={props.data.image} class="card-img pl-3" style={{height:'170px',width:'200px'}} />
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h3 class="card-title">{props.data.place}</h3>
                        <h5 class="card-title">{props.data.issue}</h5>
                        {/* <p class="card-text">{props.data.description}</p> */}
                        {console.log(props.data)}
                        <button className="btn btn-success"><Link className="white-link" to={'/cardview/'+encodedData} >Show More</Link></button>
                    </div>
                </div>

                <div style={{alignItems:"end"}} class="col-md-3 text-right pr-3">
                    <button onClick={handleW} className="btn btn-secondary mb-2">Wait</button>
                    <button onClick={handleO} className="btn btn-primary mb-2">Ongoing</button>
                    <button onClick={handleS} className="btn btn-success">Solved</button>
                </div>
            </div>
        </div>
    </>)
}

export default ClgDisplay;