import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import FilterAlt from '@mui/icons-material/FilterAlt';
import "./App.css"
import {BsGridFill} from 'react-icons/bs'
export default function Asignaturas() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="ml-1">Filtrar por:</div>
      <br />
      <hr></hr>
      <List>
        {['BBDD', 'Ingles', 'Sistemas', 'FCN', 'Programación'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  const [ex, setEx] = useState([]);
  const [b, setb] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lista = b ? "md:grid md:gap-4 md:grid-cols-5 md:grid-rows-3 md:ml-12 grid  mb-24 mt-14" : "flex flex-col mb-24 justify-center items-center";
  
 
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.7.151:8000/clase/api/apunte/${id}/`);
      setEx((prevEx) => prevEx.filter((item) => item.id !== id));
      Swal.fire(`Apunte borrado`);
    } catch (error) {
      Swal.fire('Error deleting item: ' + error.message);
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
    <div className="mt-20 ">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="text-white float-left"onClick={toggleDrawer(anchor, true)}><FilterAlt></FilterAlt></Button>
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
    

    <div className=' mr-4 '>
  <button className='Icono hover:text-blue-700'><BsGridFill/></button>
  </div>
  <div id="lista"className={`${lista}`}>
  <ul className='mb-80 '>
    {ex.map((item) => (
      <div key={item.id} id="card-examen" className='max-w-sm p-6  border border-gray-200 rounded-lg shadow  my-10 break-words'>
      
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        <strong>Asignatura:</strong> {item.Asignatura} <br />
        <strong>Tema:</strong> {item.tema} <br />
        <strong>Text:</strong> {item.text}
        </p>
        <div className='m-auto text-center'>
        <button className='focus:outline-none mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => handleDelete(item.id)}>
          DELETE
        </button>
        </div>
      </div>
    ))}
  </ul>
  </div>
</>
  );
}