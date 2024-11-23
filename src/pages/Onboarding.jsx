import Register from "./Register";
import SignIn from "./SignIn";
import Buttons from "../components/Buttons";
import { Route, Routes} from "react-router-dom";


const Onboarding = () => {

  return (
     <div className="m-40">
    <Buttons />
    <Routes>
      <Route path="/" element={
           <SignIn />  
        } />


      <Route path="sign-up" element={
          <Register />
        } />
    </Routes>
    </div >
  );
}


export default Onboarding;