import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './componentss/Hearder';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './componentss/Navbar';
import Footer from './componentss/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    {/* <BasicExample/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
<Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
