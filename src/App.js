
import './App.css';

import shade from './Assets/shade.png'

import Home from './Sections/Home';
function App() {
  return (
    
    <div className="h-[6000px] w-full bg-primary_black relative flex justify-center ">
      <img src={shade} className='-translate-y-[125px] translate-x-30 sm:-translate-y-64  w-[700px] opacity-20 sm:opacity-30 absolute z-30' alt="" />
      <Home/>   
    </div>



  );
}

export default App;
