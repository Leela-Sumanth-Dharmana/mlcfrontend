import React from 'react';
// import pic from './water.jpg';
import { useNavigate, useParams } from 'react-router-dom';
function CardView(props) {
    const {data}=useParams();
    const decodedData=JSON.parse(decodeURIComponent(data));
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            {console.log(decodedData)}
            
            <div>
                <button style={{width:'100px'}} onClick={handleGoBack} className="mt-2 ml-2 btn btn-primary text-light rounded">
                    <span>&larr;Back</span>
                </button>
            </div>
            <div>
                <div className="letter-container bg-light text-dark mt-3 rounded">
                    <div className="letter-header">
                        <h2>{decodedData.issue}</h2>
                        <p>{decodedData.place}</p>
                    </div>
                    <div className="letter-body">
                        <img  className='pb-5' src={decodedData.image} height="20%" width="100%" />
                        <br />
                        <h3 style={{textDecorationLine:'underline'}} className='fw-bold'>Description:</h3>
                        <p pb-2>
                            {decodedData.description}
                        </p>
                    </div>
                    <div className="letter-footer text-right" style={{alignContent:'end'}}>
                        <p className='fw-bold'>Complaint given by:{props.name}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CardView;