
// import { Link } from 'react-router-dom'

import { Link, useNavigate} from "react-router-dom"

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="m-10 text-slate-500 border rounded-md p-8 shadow-lg bg-opacity-30 relative">
      <label className="text-gray-400 ">Email Addrress</label>
      <input className="block w-72 py-2.3 px-0 text-white bg-transparent border-2 rounded border-gray-200 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"  type="email" />
      <button className="w-72 block mb-4 text-[18px]  mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-800 py-2 transistion-colors duration-300" type="submit">Continue</button>

      <span><Link onClick={()=>navigate('other-options')} className="text-blue-700" to={'other-options'}>View all option</Link></span>
      <p >By signing in, I agree to Reads terms of Services <br/> and acknowledge I have read the Privacy Policy</p>
    </div>
  )
}

export default SignIn