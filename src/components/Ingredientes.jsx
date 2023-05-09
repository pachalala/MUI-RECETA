import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";

const Ingredientes = () => {
  const columnas = [
    {
      title: "ID",
      field: "id",
    },

    {
      title: "Nombre",
      field: "nombre",
    },
  ];

  const data2 = [
    {
      id: 1,
      nombre: "ingre 1",
    },
    {
      id: 2,
      nombre: "ingre 2",
    },
    {
      id: 3,
      nombre: "ingre 3",
    }
  ];

//  const [data, setData] = useState("");

 /* useEffect(() => {
    const obtenerNombre = async () => {
      const response = await fetch(`http://localhost:3000/ingredientes`);
      const data = await response.json();
      console.log(`data 1:${JSON.stringify(data)}`);

      setData(data);
    };
    obtenerNombre();
  }, []);
*/
  return (
    <>
      <h2>Ingredientes listar</h2>
      <MaterialTable columns={columnas} data={data2} />
    </>
  );
};

export default Ingredientes;
