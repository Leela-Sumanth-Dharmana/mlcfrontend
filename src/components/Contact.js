import Footer from './Footer';
import Nav from './Nav';
import pic from './vitap.png'


function Contact(props) {
    return (<>
        <div style={{ height: '100vh' }}>
            <Nav name={props.name} />
            <div style={{justifyItems:"center"}} className="box1 text-center h-100 pt-5">
                <div className="shadow-lg container pt-2" style={{borderRadius:"20px"}}>
                    <blockquote class="blockquote">
                        <input type="image" src={pic} alt="VIT-AP" width="100px" />
                        <h2>Point of Contact for Various Issues</h2>
                    </blockquote>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Domain of Issue</th>
                                <th scope="col">Point of Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Academic/ Non-Academic</td>
                                <td>Assistant Director-Mentoring and Student Grievances</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Student Discipline</td>
                                <td>Assistant Director-Student Discipline and Outreach Activities</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Men's Hostel</td>
                                <td>Chief Warden MH</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Ladies's Hostel</td>
                                <td>Chief Warden LH</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div>

                </div>
            </div>
            <Footer/>
        </div>

    </>)
}

export default Contact;