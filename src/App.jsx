 
import './App.css'

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
 

import Nav from './components/Nav'


import    Ingredientes  from './components/Ingredientes'



function App() {
 
  return (
    <>
    <BrowserRouter>

    <Routes>
       <Route  path="/ingredientes" element={<Ingredientes/>}>Ingredientes</Route>  
       <Route  path="/platos" element={<Ingredientes/>}>Platos</Route>  
       <Route  path="/" element={<Ingredientes/>}>Home</Route>  
     
       </Routes>



      <Nav/>
    </BrowserRouter>
   </> 
  )
}

export default App
