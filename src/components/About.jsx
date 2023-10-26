import React from 'react';


const AboutPage = () => {
 return (
    <div className="container mx-auto px-4 mt-56 justify-center">
      <div className="bg-blue-500 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white">Acerca de</h1>
        <p className="text-xl mt-4 text-white">
          Somos dos desarrolladores apasionados por el mundo de la tecnología que hemos creado esta aplicación.
        </p>
        <p className="text-xl mt-4 text-white">
          Nuestro objetivo es facilitar el acceso y la organización de apuntes y fechas de examenes, ofreciendo a los usuarios una experiencia intuitiva y atractiva.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4"><a target="_blank" href='https://github.com/luisnisc'>Luis</a></h2>
          <p className="text-xl">
            En este proyecto he sido el encargado tanto del Web Desing como del Front-end, he usado las siguientes herramientas: <strong>React</strong> y <strong>Tailwind</strong>
          </p>
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4"><a target="_blank" href='https://github.com/unaiccz'>Unai</a></h2>
          <p className="text-xl">
            Información sobre el desarrollador 2, encargado del desarrollo del backend con <strong>Django</strong> y REST_FRAMEWORK.
          </p>
        </div>
      </div>
    </div>
 );
};

export default AboutPage;
