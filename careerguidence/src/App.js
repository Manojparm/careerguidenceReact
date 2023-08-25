import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage   from './pages/HomePage.js';
import ApptitudeTestPage from './pages/ApptitudeTestPage.js';
import CareerSelectionPage from './pages/CareerSelectionPage';
import CollegeListPages from './pages/CollegeListPages';
import CollegeRegistrationPage from './pages/CollegeRegistrationPage';
import CollegeSelectionPage from './pages/CollegeSelectionPage';
import CollegeSignUpPage from './pages/CollegeSignUpPage';
import LocationSelectionPage from './pages/LocationSelectionPage';
import SignUpPage from './pages/SignUpPage';
import StudentDetailsPages from './pages/StudentDetailsPages';
import StudentLoginPage from './pages/StudentLoginPage';
import TestCompletionPage from './pages/TestCompletionPage';
function App() {
  return (
   <>     
      <Routes>
      <Route path="/"  element={<HomePage/>}/>
      <Route path='/aptitudetest' element={<ApptitudeTestPage/>}/>
      <Route path='/careerselection' element={<CareerSelectionPage/>}/>
      <Route path="collegelist" element={<CollegeListPages/>}/>
      <Route path="/collegeregistration" element={<CollegeRegistrationPage/>}/>
      <Route path="collegeselection" element={<CollegeSelectionPage/>}/>
      <Route path="/collegesignup" element={<CollegeSignUpPage/>}/>
      <Route path="/locationselection" element={<LocationSelectionPage/>}/>""
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/studentdetails" element={<StudentDetailsPages/>}/>
      <Route path="/studentlogin" element={<StudentLoginPage/>}/>
      <Route path="/testcompletionpage" element={<TestCompletionPage/>}/>
     </Routes>
     </>

  
  );
}

export default App;
