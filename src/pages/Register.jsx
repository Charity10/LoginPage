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
<div className="m-10 p-6 relative h-80 w-80 ">
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
     <span><button className="text-blue-700 font-bold" onClick={()=> setViewSSO(true)}>Sign up with Single Sign-On (SSO)</button> </span>
     <label className=" block text-gray-400">Email Addrress</label>
     <input className="block w-60 py-2.3 px-0 text-white bg-transparent border-2 rounded border-gray-200 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"  type="email" />
     <button className="w-60 block mb-4 text-[18px]  mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-800  py-2 transistion-colors duration-300" type="submit">Continue</button>
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
      <div className="m-auto w-40 font-bold flex flex-col gap-2 text-white ">
      <p className="bg-red-900 rounded-full p-2 text-center">Google</p>
      <p className="bg-green-800 rounded-full p-2 text-center">Microsoft</p>
      <p className="bg-blue-800 rounded-full p-2 text-center">Twitter</p>
      </div>
      <div className="flex items-baseline ">
      <div className="bg-slate-600 border-2 w-20 m-5"></div>
      <p>or</p>
      <div className="bg-slate-600 border-2 w-20 m-5"></div>
      </div>

      <div className="">
        
      <motion.button className="text-blue-700 mx-auto font-bold block" onClick={()=> setViewSSO(false)}> Sign up with email</motion.button>

      <input type="checkbox" id="terms" name="terms" value="terms" />
      <label className="text-gray-400 text- items-start"> I have read and agree to Reads Privacy Policy and Terms of Services</label>

      </div>
      </motion.div>
  )
  
  }
  
  </AnimatePresence>
    
    </div>

  )
}

export default Register