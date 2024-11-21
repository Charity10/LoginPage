import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


const Register = () => {
const [viewSSO, setViewSSO] = useState(false);

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible:{ opacity: 1, y: 0},
  exit: {opacity: 0, y: -20}
}

  return (
<div className="m-10 border rounded-md p-6 shadow-lg bg-opacity-30 relative">
  <AnimatePresence mode="wait">

  {!viewSSO ? (
    <motion.div
        key="registerView"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{duration:0.3}}

    >
     <span><button className="text-blue-700" onClick={()=> setViewSSO(true)}>Sign up with Single Sign-On (SSO)</button> </span>
     <label className=" block text-gray-400">Email Addrress</label>
     <input className="block w-72 py-2.3 px-0 text-white bg-transparent border-2 rounded border-gray-200 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"  type="email" />
     <button className="w-72 block mb-4 text-[18px]  mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-800  py-2 transistion-colors duration-300" type="submit">Continue</button>
     <input type="checkbox" id="terms" name="terms" value="terms" />
     <label className="text-gray-400 items-start"> I have read and agree to Reads Privacy Policy and Terms of Services</label>
     </motion.div>
  ): (
      <motion.div
        key="SSOView"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{duration:0.3}}
      >
      <div className="m-10 w-40 flex flex-col gap-4 text-white ">
      <p className="bg-red-900 rounded-full p-2 text-center">Google</p>
      <p className="bg-green-800 rounded-full p-2 text-center">Microsoft</p>
      <p className="bg-blue-800 rounded-full p-2 text-center">Twitter</p>
      </div>
      <div className="flex items-baseline ">
      <div className="bg-slate-600 border-2 w-20 m-10"></div>
      <p>or</p>
      <div className="bg-slate-600 border-2 w-20 m-10"></div>
      </div>

      <div className="px-20">
      <motion.p className="text-blue-700" onClick={()=> setViewSSO(false)}> sign up with email</motion.p>

      <input type="checkbox" id="terms" name="terms" value="terms" />
      <label className="text-gray-400 items-start"> I have read and agree to Reads Privacy Policy and Terms of Services</label>

      </div>
      </motion.div>
  )
  
  }
  
  </AnimatePresence>
    
    </div>

  )
}

export default Register