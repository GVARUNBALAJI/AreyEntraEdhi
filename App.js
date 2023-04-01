import './App.css';
import { Route,Routes } from 'react-router-dom';
import Pricing from './components/pricing';
import SignIn from './components/signin';
import Navbar from './components/navbar';
import AboutUs from './components/AboutUs'
import Villa from './components/villa';
import Apartment from './components/Apartment';
import Request from './components/request';
import Profile from './components/Profile';
import Form from './components/signupForm';
import Entry from './components/entry';
import Feedback from './components/feedback';
import FeedbackForm from './components/form';
import Submissions from './components/submissions';
import feed from './components/feed';
import profile from './components/prof';
function App() {
  return (
    <div className="App" >
    <Navbar/>
    <Routes>
      <Route path='Entry' element={<Entry/>}/>
    <Route exact path='SignIn' element={<SignIn/>}/><Route/>
    <Route path= 'Villa' element={<Villa/>}/>
    <Route path='Apartment' element={<Apartment/>}/>
    <Route path='Request' element={<Request/>}/>
    <Route path='Pricing' element={<Pricing/>}/>
    <Route path='AboutUs' element={<AboutUs/>}/>
    <Route path='Profile' element={<Profile/>}/>
    <Route path='Form' element={<Form/>}/>
    <Route path="FeedbackForm" element={<FeedbackForm/>}/>
    <Route path="submissions" element={<Submissions />} />
    <Route path="submission/:id" element={<Submissions />} />
    <Route path="profile" element={<profile/>}/>
     </Routes> 
     
    </div>
  );
}

export default App;
