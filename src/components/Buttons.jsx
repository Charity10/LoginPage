import { NavLink } from "react-router-dom"

const Buttons = () => {
  return (
    <div className='m-8 flex items-center'>
      <NavLink className='border-b-4 p-2 w-40 [&.active]:bg-blue-100 [&.active]:rounded [&.active]:border-b-blue-600' to={'/sign-up'}><button type='submit'>Create account</button> </NavLink>

      <NavLink className='border-b-4 p-2 w-40  rounded [&.active]:bg-blue-100 [&.active]:border-blue-700'  to={'/'}><button type='submit'>Sign In</button> </NavLink>
    </div>
  )
}

export default Buttons