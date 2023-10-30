import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterAlt from '@mui/icons-material/FilterAlt';
import "./App.css"
import {BsGridFill} from 'react-icons/bs'
import Filtro from './components/Filtro';
export default function Asignaturas() {
  const rl = () => window.location.reload();
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.7.151:8000/clase/api/apunte/${id}/`);
      setEx((prevEx) => prevEx.filter((ex) => ex.id !== id));
      Swal.fire({
        customClass: {
          confirmButton: 'swalBtnColor',
        },
        title: 'Apunte borrado',
        icon: 'success'
      });
    } catch (error) {
      Swal.fire('Error deleting item: ' + error.message);
    }
  };
  const [Filter, setFilter] = useState("");
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className='w-48 h-full bg-gray-800 border-gray-200 '
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="ml-1 text-white">Filtrar por:</div>
      <br />
      <hr/>
      <br/>
      <ul className='ml-2 text-white '>
        <button className="hover:text-blue-500"onClick={() => setFilter("BBDD") }>BBDD</button><br/>
        <button className="hover:text-blue-500"onClick={() => setFilter("SISTEMAS")}>Sistemas</button><br/>
        <button className="hover:text-blue-500"onClick={() => setFilter("FCN")}>FCN</button><br/>
        <button className="hover:text-blue-500"onClick={() => setFilter("INGLES")}>Ingles</button><br/>
        <button className="hover:text-blue-500"onClick={() => setFilter("LENGUAJE DE MARCAS")}>Lenguaje de Marcas</button>
        <button className="hover:text-blue-500"onClick={() => setFilter("")}>Sin filtro</button>

      </ul>
      <br />
      <hr/>
      <Divider />
    </div>
  );
  const [ex, setEx] = useState([]);
  const [b, setb] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lista = b ?  "md:grid md:gap-4 md:grid-cols-5 md:grid-rows-3 md:ml-12 grid grid-cols-5 gap-4 mb-24 mt-20 mr-12 duration-500 w-full"  : "flex flex-col mb-24 justify-center items-center duration-500";
  
 
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.7.151:8000/clase/api/apunte/');
      setEx(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data from API: ' + error.message);
      setLoading(false);
    }
  };

  

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect will only run once after the initial render

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
    <div className=" fixed ">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor} >
          <Button className="text-white float-left "onClick={toggleDrawer(anchor, true)}><FilterAlt></FilterAlt></Button>
          <Drawer
            
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            
            {list(anchor)}
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    

    <div className=' mr-4 mt-20'>
  <button className='Icono  fixed right-6'  onClick={()=>setb(!b)}><BsGridFill/></button>
  </div>
  
   <Filtro handleDelete={handleDelete()} setEx={setEx} b={b} ex={ex} Filter={Filter}/>
  
</>
  );
}