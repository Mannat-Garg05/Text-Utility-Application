
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/textform';
import About from './Components/about'
import { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
// import Switch from "react-router-dom";
function App() {

  function callFromParent(data){
    console.log("back to the app.js");
    console.log(data);
  }
  const [mode,setMode]=useState('light');
  // const [Alert,setAlert]= useState(null );
  // const showAlert=(message,type)=>{
  //   setAlert({
  //     message:message,
  //     type:type 

  // })
  //   }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='lightgray';
      // showAlert("Dark mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#fff';
     // showAlert("Light mode enabled", "success");
    }
  }
  
  return (
    <>
      <div className="App">
        <Router>
        <Navbar title="React App" mode= {mode} toggleMode={toggleMode}  />
        {/* <br/>
        <Alert /> */}
        
        {/* <div className='container'>
          <About/>

        </div> */}
          <Routes>
            <Route exact path="/" element={<Textarea heading="Enter the text here"  mode= {mode} toggleMode={toggleMode} callFromParent={callFromParent} /> } />
          </Routes>
        <Routes>
            <Route exact path="/about"  element={<About mode={mode}  / > }  />
          </Routes>
        </Router>
      </div>
      
    </>
  );
}

export default App;
