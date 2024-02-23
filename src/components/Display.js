import { Link } from "react-router-dom";
import { useState } from "react";
function Display(props) {
    const [data, setData] = useState(props.data);
    const encodedData = encodeURIComponent(JSON.stringify(data));
    return (<>
    
        <div class="card mb-3 shadow-sm mx-auto" style={{ maxWidth: "70%", marginLeft: "30px" }}>
            <div class="row no-gutters">
                <div class="col-md-3">
                    <img src={props.data.image} class="card-img pl-3" style={{height:'160px',width:'200px'}} />
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

                <div class="col-md-3 pt-5">
                    {props.data.status==='0'?(<><span style={{fontSize:"20px"}} className="fw-bold text-warning">Waiting For Response</span></>):(null)}
                    {props.data.status==='1'?(<><span style={{fontSize:"20px"}} className="fw-bold text-danger">Hold</span></>):(null)}
                    {props.data.status==='2'?(<><span style={{fontSize:"20px"}} className="fw-bold text-primary">In Progress</span></>):(null)}
                    {props.data.status==='3'?(<><span style={{fontSize:"20px"}} className="fw-bold text-success">Solved</span></>):(null)}
                </div>
            </div>
        </div>
    </>)
}

export default Display;