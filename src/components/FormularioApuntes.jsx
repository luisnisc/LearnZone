import React from 'react'
import { useForm } from "react-hook-form";
import { posApunte } from "./Ft";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
export default function FormularioApuntes() {
    const { register, handleSubmit } = useForm();

  const hs = handleSubmit((data, event) => {
    event.preventDefault();
    posApunte(data);
    console.log(data);
    Swal.fire({
        customClass: {
          confirmButton: "swalBtnColor",
        },
        title: "Apunte creado",
        icon: "success",
        confirmButtonText: "Ok"
      });
  });
  return (
    <>
    <Link to="/asignaturas/asignaturas">
    <FaArrowLeft className='float-left mt-20 scale-125 '/>
    </Link>
        <div class="min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            
  <div class="max-w-md w-full space-y-8 bg-white bg-opacity-100 backdrop-filter backdrop-blur-lg p-10 rounded-xl">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-blue-900">
        Ingresa la información
      </h2>
    </div>
    <form class="mt-8 space-y-6"         
    onSubmit={hs}
    >
      <input type="hidden" name="remember" value="true"/>
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="asignatura" class="sr-only">Asignatura</label>
          <input id="asignatura" name="asignatura" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-300 placeholder-blue-500 text-blue-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Asignatura" {...register("Asignatura")}/>
        </div>
        <div>
          <label for="tema" class="sr-only">Tema</label>
          <input id="tema" name="tema" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-300 placeholder-blue-500 text-blue-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Tema" {...register("tema")}/>
        </div>
        <div>
          <label for="texto" class="sr-only">Texto</label>
          <input id="texto" name="texto" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-300 placeholder-blue-500 text-blue-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Texto" {...register("text")}/>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Enviar
        </button>
      </div>
    </form>
  </div>
</div>
</>
  )
}
