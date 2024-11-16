import { Link, useNavigate } from "react-router-dom"


const Register = () => {

  return (
<div className="m-10 border rounded-md p-6 shadow-lg bg-opacity-30 relative">
     <span><Link className="text-blue-700" to={'/other-options'}>Sign up with Single Sign-On (SSO)</Link> </span>
      <label className=" block text-gray-400">Email Addrress</label>
      <input className="block w-72 py-2.3 px-0 text-white bg-transparent border-2 rounded border-gray-200 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"  type="email" />
      <button className="w-72 block mb-4 text-[18px]  mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-800  py-2 transistion-colors duration-300" type="submit">Continue</button>
      <input type="checkbox" id="terms" name="terms" value="terms" />
      <label className="text-gray-400 items-start"> I have read and agree to Reads Privacy Policy and Terms of Services</label>
    </div>

  )
}

export default Register