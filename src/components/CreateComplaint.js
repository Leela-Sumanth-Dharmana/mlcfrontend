import { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
function converttobase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
function CreateComplaint(props) {
    
    const [Thumbnail, setThumbnail] = useState("");

    const handlefileupload = async (e) => {
        const file = e.target.files[0];
        const base64 = await converttobase64(file);
        setThumbnail(base64);

    }
    const navigate=useNavigate();
    const [place,setPlace]=useState();
    const [issue,setIssue]=useState();
    const [description,setDescription]=useState();
    const handleSubmit=()=>{
        const data={"id":props.id,"place":place,"issue":issue,"description":description,"image":Thumbnail,"status":"0"};
        Axios.post('https://mlcbackend.onrender.com/route/createcomplain',data)
        .then((res)=>{
            if(res.status==200){
                alert("Complaint Registered...")
                navigate('/mycomplaint')
            }
        })
        .catch((err)=>alert(err))
    }
    return (
        <div>
            <Nav />
            <div class="main pb-2  ">
                <h1 class=" text text-center mt-5 text-dark">Raise Your Complaint</h1>
                <center>
                    <div class="shadow col-lg-10 col-md-7 col-sm-12 my-5 pt-2" style={{ marginBottom: "100%" }}>
                        <form>
                        <select onChange={(event) => setPlace(event.target.value)} style={{maxWidth:'700px',fontWeight:'bold'}} class="form-select mt-3 my-3 border-secondary" id="dropdown" >
                                <option value="opt1">Choose Domain</option>
                                <option value="Hostel">Hostel</option>
                                <option value="College">College</option>
                            </select>
                            <input onChange={(event)=>setIssue(event.target.value)} style={{maxWidth:'700px',height:'37px',fontWeight:'bold'}} class="form-control mt-3 my-3 border-secondary" placeholder="Enter your Issue" />
                            {/* <input type="select" class="form-control my-3 w-75 border-secondary" placeholder="Enter Price" /> */}
                            <textarea onChange={(event)=>setDescription(event.target.value)} style={{maxWidth:'700px',fontWeight:'bold'}} type="text-area " class="form-control my-3 border-secondary" placeholder="Describe your issue" />
                            <input onChange={handlefileupload} style={{height: "2rem", alignItems: "left",color:'black',fontWeight:'bold' }} className="border-secondary " type="file"  accept='.jpg,.jpeg,.png' />
                            <br></br>
                            <button onClick={handleSubmit} class="btn btn-success my-4 "  type="Submit">Submit</button>
                        </form>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default CreateComplaint;