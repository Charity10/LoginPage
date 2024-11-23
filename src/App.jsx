import Onboarding from "./pages/Onboarding";
import img1 from './assets/image1.jpg'


const App = () => (
  <div className="flex h-screen">
    <div className="flex-none w-full lg:w-1/2">
      <Onboarding />
    </div>

    <div className="hidden lg:flex flex-1 flex-col bg-blue-800 text-white">
      <p className="text-center m-10 font-bold text-2xl">Automatic Summarise meetings</p>
      <img src={img1} alt="image 1" className=" object-cover" />
    </div>

  </div>
)


export default App;