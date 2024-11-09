import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom';
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import MainScreen from './screen/MainScreen'
import LoginComponent from './Components/LoginComponent';
import AddDataComponent from './Components/AddDataComponent';


function App() {
  

  return (
    <>
       <Router>
           <Routes>
               
                <Route  element={<MainScreen/>}  path='/HomeScreen'></Route>
                {/* <Route  element={<Dashboard/>}  path='/dashboard/*' /> */}
                <Route  element={<LoginComponent/>}  path='/Login'/>
                <Route  element={<AddDataComponent/>}  path='/addData'/>

           </Routes>
       </Router>
    </>
  )
}

export default App
