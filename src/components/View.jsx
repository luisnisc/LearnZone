import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import {BsGridFill} from 'react-icons/bs'
function View() {
  const [ex, setEx] = useState([]);
  const [b, setb] = useState(true);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
    
   
  const lista = b ? "md:grid md:gap-4 md:grid-cols-5 md:grid-rows md:ml-4 grid ml-4 mb-24 mt-2 duration-500" : "grid grid-col mb-24 justify-center items-center duration-500";
  
 
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.7.151:8000/clase/api/api/');
      setEx(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data from API: ' + error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.7.151:8000/clase/api/api/${id}/`);
      setEx((prevEx) => prevEx.filter((item) => item.id !== id));
      Swal.fire({
        customClass: {
          confirmButton: 'swalBtnColor'
        },
        title: 'Examen borrado',
        icon: 'success'
      });
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
    
    
    <div>
    
    <h3 className='text-center mb-1 mt-1'>Examenes</h3>
      <hr />
      <div className='float-right'>
      <button className='Icono hover:text-blue-700 ' onClick={()=>setb(!b)}><BsGridFill/></button>
      </div>
      <div id="lista"className={`${lista} `}>
      
        {ex.map((item) => (
          <div key={item.id} id="card-examen" className='p-6 max-w-m  border border-gray-200 rounded-lg shadow  my-10 h-60 '>
          
            <p className='mb-3 font-normal text-gray-700  overflow-hidden'>
            <strong>Asignatura:</strong> {item.asignature} <br />
              <strong>Fecha:</strong> {item.date}
            </p>
            <div className='mt-24 text-center'>
            <button className='focus:outline-none  mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 ' onClick={() => handleDelete(item.id)}>
              DELETE
            </button>
            </div>
          </div>
        ))}
   
      </div>
    </div>
   
  );
}

export default View;


