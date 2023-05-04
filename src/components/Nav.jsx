 
import {  Link } from 'react-router-dom';



function Nav() {
   
  return (

     <nav>
        <Link to="/" >Home</Link>
   
        <Link to="/ingredientes" >Ingredientes</Link>
        <Link to="/platos" >Platos</Link>
   

    </nav>
    
  )
}

export default Nav