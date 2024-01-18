import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";
/**
 * TODO: Hacer que la carte se haga mas alta, pero no modifique la posicion de las demas
 * ? 
 * *
 * ! 
 * @filtered 
 */
function Filtro({ ex, Filter, b, setEx}) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.7.151:8000/clase/api/apunte/${id}/`);
      setEx((prevEx) => prevEx.filter((ex) => ex.id !== id));
      Swal.fire({
        customClass: {
          confirmButton: "swalBtnColor",
        },
        title: "Apunte borrado",
        icon: "success",
      });
    } catch (error) {
      Swal.fire("Error deleting item: " + error.message);
    }
  };
 const lista = b
    ? "md:grid md:gap-4 md:grid-cols-5 md:grid-rows-3 md:ml-12 grid-cols-5 gap-4 mb-24 ml-12 mt-20 mr-12 duration-500 grid-rows-auto"
    : "flex flex-col mb-24 mx-16 duration-500 w-sccreen";

 const [filtered, setFiltered] = useState([]);
 useEffect(() => {
    if (Filter !== "") {
      setFiltered(
        ex.filter((ex) => ex.Asignatura.toUpperCase() === Filter.toUpperCase())
      );
    } else {
      setFiltered(ex);
    }
 }, [Filter, ex]);
 const [openCardId, setOpenCardId] = useState(null);
 const [cardIsOpen, setCardIsOpen] = useState({});
 const [cardIsOn, setCardIsOn] = useState({});
 const [zIndex, setZIndex] = useState({});
 const refs = useRef({});

 const variants = {
    open: { y: 0, x: 0, width: "100%", height: "max-content", overflowWrap: "break-word" },
    closed: { y: 0, x: 0, width: "100%", rotate: 0, overflow: "hidden", },
    on: { background: "white", radius: "10px" },
 };

 const handleCardClick = (id) => {
    setCardIsOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    setCardIsOn((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    setOpenCardId((prevId) => (prevId === id ? null : id));
 };

return (
  <div className={lista}>
    {filtered.map((ex) => {
      if (!refs.current[ex.id]) {
        refs.current[ex.id] = React.createRef();
      }
      return (
        <motion.div
          key={ex.id}
          ref={refs.current[ex.id]}
          animate={openCardId === ex.id ? "open" : "closed"}
          variants={variants}
          layout
        >
          <div
            key={ex.id}
            id="card-examen"
            className="p-6 border border-gray-200 rounded-lg shadow my-10"
            style={{ 
              zIndex: openCardId === ex.id ? 2 : 1,
            }}
          >
            <p className="mb-3 font-normal text-gray-700">
              <strong>Asignatura:</strong> {ex.Asignatura} <br />
              <strong>Tema:</strong> {ex.tema} <br />
              <strong>Texto:</strong> {ex.text} <br />
              <strong>Fecha de Creación</strong> {ex.fecha_creacion}
            </p>
            <div className='m-auto text-center'>
              {/* <button className='focus:outline-none mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => handleDelete(ex.id)}>
                DELETE
              </button> */}
              <button className="focus:outline-none mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" onClick={() => handleCardClick(ex.id)}>
                {openCardId === ex.id ? "VER MENOS" : "VER MÁS"}
              </button>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
);
}

export default Filtro; 