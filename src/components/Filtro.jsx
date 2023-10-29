
import React, { useState, useEffect } from 'react';
import "../App.css"
import axios from 'axios';
import Swal from 'sweetalert2';


function Filtro({ex, Filter}) {
    const [filtered, setFiltered] = useState([]);
    useEffect(() => {
        if (Filter !== '') {
            setFiltered(ex.filter((ex) => ex.Asignatura.toUpperCase() === Filter.toUpperCase()));
        } else {
            setFiltered(ex);
        }

    }, [Filter, ex]);
  
    return (
        <>
        <div>
            {filtered.map((ex) => (
                
                <div key={ex.id} id="card-apuntes" className='max-w-sm p-6  border border-gray-200 rounded-lg shadow  my-10 break-words h-fit'>
      
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                <strong>Asignatura:</strong> {ex.Asignatura} <br />
                <strong>Tema:</strong> {ex.tema} <br />
                <strong>Text:</strong> {ex.text}
                </p>
                <div className='m-auto text-center'>
                <button className='focus:outline-none mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => handleDelete(ex.id)}>
                  DELETE
                </button>
                </div>
              </div>
            ))}
            </div>
            </>
    )
}

export default Filtro