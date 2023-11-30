import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { pos } from "./components/Ft";
import View from "./components/View";
import Swal from "sweetalert2";
import "./App.css";

function Examen() {
  const rl = () => window.location.reload();

  const { register, handleSubmit } = useForm();

  const hs = handleSubmit((data, event) => {
    event.preventDefault();
    pos(data);
    console.log(data);
  });

  return (
    <>
      <form
        onSubmit={hs}
        className="ml-10 mt-10"
      >
        <div className="mb-6 mt-20 md:mt-28">
          <label
            for="asignatura"
            class="block ml-4 mb-1 mt-1 text-sm font-medium text-white dark:text-white"
          >
            Asignatura:{" "}
          </label>
          <input
            type="text"
            id="asignatura"
            className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            placeholder="Asignatura"
            {...register("asignature")}
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="fecha"
            className="block ml-4 mb-2 text-sm font-medium text-white dark:text-white"
          >
            Fecha:{" "}
          </label>
          <input
            type="text"
            id="fecha"
            className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            placeholder="Fecha"
            {...register("date")}
            required
          />
        </div>
        <div className="flex items-center mb-6">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center ml-2 m"
          >
            Crear
          </button>
          {/* <button onClick={rl} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-8">Reiniciar</button> */}
        </div>
      </form>
      <View />
    </>
  );
}

export default Examen;
