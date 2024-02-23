import {useState,useEffect} from 'react'

import {HashRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/Signup'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
// import ChatWidget from './components/ChatWidget';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CreateComplaint from './components/CreateComplaint';
import MyComplaints from './components/MyComplaints';
import HomeClg from './components/HomeClg';
import CardView from './components/CardView';
import Contact from './components/Contact';
import ClgComplaints from './components/ClgComplaints';
import HstlComplaints from './components/HstlComplaint';
import HstlHome from './components/HstlHome'
function App() {

  const [id,setId]=useState([]);
  const [name,setName]=useState();


  useEffect(() => {
    try{
      const storedId = localStorage.getItem('id');
      const storedName=localStorage.getItem('name');

      if (storedId) {
        setId(JSON.parse(storedId));
      }

      if(storedName){
        setName(JSON.parse(storedName))
      }
    }
    catch{
      
    }
  }, []);

  const getState=(childData)=>{
   
      setId(childData._id);
      setName(childData.regno);
      localStorage.setItem('id', JSON.stringify(childData._id));
      localStorage.setItem('name', JSON.stringify(childData.regno));
  }

  return (
    <div className="App">
      {/* {console.log(name)} */}
      <HashRouter>
        <Routes>
        <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login getState={getState} />} />
          <Route path='/home' element={<Home name={name} />} />
          <Route path='/newcomplaint' element={<CreateComplaint id={id} name={name} />} />
          <Route path='/mycomplaint' element={<MyComplaints id={id} name={name} />} />
          <Route path='/chome' element={<HomeClg />} />
          <Route path='/cardview/:data' element={<CardView name={name} />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/clgcomplain' element={<ClgComplaints id={id} name={name} />} />
          <Route path='/hstlcomplain' element={<HstlComplaints id={id} name={name} />} />
          <Route path='/hhome' element={<HstlHome />} />
          {/* <Route /> */}
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
