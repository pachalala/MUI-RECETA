import {  Button }from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';



const Ingrediente = () => {
   const [data, setData] = useState('');

   const [esTextoValido, setEsTextoValido] = useState(true);
  
   const { id } = useParams();
   
  useEffect(() => {
    const obtenerNombre = async () => {
      const response = await fetch(`http://localhost:3000/ingredientes/${id}`);
      const data = await response.json();
      console.log(`data 1:${JSON.stringify(data)}`);
   

      setData(data);
    };
    obtenerNombre();
  } ,[id]);

   const  validacampos  = () =>{


    console.log("en valida campos");


      const nombreval = data.nombre.trim() !== ''

      setEsTextoValido(nombreval);

      return nombreval;

   }

 

  const handleNombreChange = (event) => {
    setData({...data, nombre: event.target.value});
    
  };

    const handleSubmit = event => {
      event.preventDefault();

console.log("data:" + JSON.stringify(data));

      if (validacampos()  ) {
        fetch('http://localhost:3000/ingredientes', {
          method: 'POST',
          body: JSON.stringify( {id: data.id,  nombre: data.nombre}
           ),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
      } else {
        console.log('Los campos no son válidos');
      }
    };


  return (
    <div>

 <form onSubmit={handleSubmit}>
       
        <h2>Ingrediente - </h2>

        <div>
          <TextField
            disabled
            id="ID"
            label="ID"
            defaultValue={id}
            variant="outlined"
            sx={{mb: 3}}
          />
        </div>
        <div>
          <TextField
              
            id="NOMBRE"
            label="Nombre"
             value= {data.nombre}
             defaultValue=" "
            variant="outlined"
            onChange={handleNombreChange}
            sx={{mb: 3}}
            error={!esTextoValido}
            helperText={!esTextoValido && 'El campo no puede estar vacío'}
          />
        </div>
         

        <Button  type="submit" variant="contained" color="primary">Guardar</Button>
      
        </form>
 
    </div>
  );
};

export default Ingrediente;
