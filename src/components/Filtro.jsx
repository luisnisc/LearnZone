import React, { useState, useEffect } from 'react';
import "../App.css"
import axios from 'axios';
import Swal from 'sweetalert2';
import ExCard from './CardMaterial';
function Filtro({ex, Filter, b, setEx}) {
    const lista = b ?  "md:grid md:gap-4 md:grid-cols-5 md:grid-rows-3 md:ml-12  grid-cols-5 gap-4 mb-24 mt-20 mr-12 duration-500 grid-rows-auto"  : "flex flex-col mb-24 justify-center items-center duration-500";

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
            <div className={lista}>
                {filtered.map((ex) => (
                    <ExCard key={ex.id} ex={ex} />
                ))}
            </div>
        </>
    )
}

// function ExCard({ ex }) {
//     const [a, setA] = useState(true);
//     const mostrar = a ? "truncate" : "h-auto";

//     return (
//         <div id="card-apuntes" className='max-w-sm p-6  border border-gray-200 rounded-lg shadow  my-10 break-words h-fit'>
//             <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
//                 <strong>Asignatura:</strong> {ex.Asignatura} <br />
//                 <strong>Tema:</strong> {ex.tema} <br />
//                 <p className={mostrar}><strong>Text:</strong> {ex.text}</p>
//             </p>
//             <button onClick={() => setA(!a)}>Ver más</button>
//             {/* <div className='m-auto text-center'>
//                 <button className='focus:outline-none mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => handleDelete(ex.id)}>
//                     DELETE
//                 </button>
//             </div> */}
//         </div>
        
//     );
// }

export default Filtro;