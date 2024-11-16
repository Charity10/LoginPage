import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Buttons from "./components/Buttons";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sso from "./components/Sso";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
    <Buttons />
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={
        <PageWrapper>
           <SignIn />
        </PageWrapper>
       
        } />
      <Route path="sign-up" element={
        <PageWrapper>
          <Register />
        </PageWrapper>
        
        } />
      <Route path="other-options" element={
        <PageWrapper>
          <Sso />
        </PageWrapper>
       
        } />
    </Routes>
    </AnimatePresence>
  );
}


function PageWrapper ({children}) {
  return (
    <motion.div
    initial={{ opacity:0, y:20}}
    animate={{ opacity: 1, y: 0}}
    exit={{ opacity: 0, y: -20 }}
    transiition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default App;