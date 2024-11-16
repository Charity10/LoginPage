import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const Sso = () => {
  const navigate = useNavigate()
  return (
    <>
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
      <motion.p className="text-blue-700" onClick={()=> navigate(-1)}> signIn with email</motion.p>
      </div>
      
    </>
  )
}

export default Sso