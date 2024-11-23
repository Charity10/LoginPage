import Register from "./Register";
import SignIn from "./SignIn";
import Buttons from "../components/Buttons";
import { Route, Routes} from "react-router-dom";
import Read from '../assets/Read-AI.png'


const Onboarding = () => {

  return (
     <div className="flex min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-sm">
      <div className="w-20 h-10 m-8 flex items-center justify-center">
    <img src={Read} alt="Icon" className="w-30" />
  </div>
    <Buttons />
    <Routes>
      <Route path="/" element={
           <SignIn />  
        } />


      <Route path="sign-up" element={
          <Register />
        } />
    </Routes>
    </div>
    </div >
  );
}


export default Onboarding;