import HstlNav from "./HstlNav";
import pic from './vitap.png'
import Footer from "./Footer";
function HomeClg() {
    return (
        <div style={{ backgroundColor: 'white', height: '100vh' }} className='text-center'>
            <HstlNav />
            <div className="box1 h-100 pt-5">
                <div className="container pt-2 mt-3" style={{borderRadius:"20px"}}>
                    <blockquote class="blockquote">
                        <h2 className="mt-4">Welcome to VIT-AP's Student Feedback Portal</h2>
                        <input type="image" src={pic} alt="VIT-AP" width="100px" />
                    </blockquote>
                    <p class="lead fw-normal">We're here to help you streamline, organize, and action your feedback</p>
                    <p class="fw-bold"><i className="fas fa-lightbulb"></i> Make feedback a positive experience for everyone involved!</p>
                    <p class="fw-bold"><i className="fas fa-lightbulb"></i> Use polite language and avoid personal attacks on the others.</p>
                    <p class="fw-bold"><i className="fas fa-lightbulb"></i>Prioritize issues that have the biggest impact on usability or accessibility.</p>
                    <p class="fw-bold"><i className="fas fa-lightbulb"></i> Use screenshots or annotations to highlight specific areas of feedback.</p>
                </div>
                <div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeClg;