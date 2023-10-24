import React from 'react'
import './Asignaturas.css'

export default function Asignaturas() {
  return (
<>
<link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
    <div id="botones"className="flex flex-col items-center" >
        <a href="/bbdd-apuntes"><button className=""id="nombres-a">Bases de datos</button></a><br/>
        <a href="/programacion-apuntes"><button className=""id="nombres-a">Programación</button></a><br/>
        <a href="/computacionN-apuntes"><button className=""id="nombres-a">Computacion en la nube</button></a><br/>
        <a href="/ingles-apuntes"><button className=""id="nombres-a">Inglés</button></a><br/>
        <a href="/sistemas-apuntes"><button className=""id="nombres-a">Sistemas</button></a>

    </div>
</>
  )
}
