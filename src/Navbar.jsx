import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { motion } from "framer-motion";
import zIndex from "@mui/material/styles/zIndex";

const variants = {
  open: { scale: 20, y: 450, x: 650, rotate: 1080 },
  closed: { scale: 1, y: 0, x: 0, rotate: 0 },
};
export default function Navbar(posicion) {
  useEffect(() => {});
  const { loc } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
      />
      <nav
        style={{ position: "fixed", top: "0", width: "100%", zIndex: 2 , userSelect: "none"}}
        className="bg-gray-800 border-gray-200 "
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 m">
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            {/* <Avatar alt="Remy Sharp" className='hover:scale-100' src="https://th.bing.com/th/id/OIG.446_X7Z4gi9Q4uIWHhuK?" sx={{ width: 40, height: 40 }}/> */}
            <Avatar
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              alt="Remy Sharp"
              className="hover:scale-100"
              src="https://m.media-amazon.com/images/I/61d+MhFjaAL._AC_UF1000,1000_QL80_.jpg"
              sx={{ width: 40, height: 40 }}
              />
              {isOpen && (
    <p style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      zIndex: 3,
      pointerEvents: 'none', // Add this line
      fontSize: '8px',
    }}>
      Eustaquio &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        🦧
      </a>
      🍌
    </p>
  )}
            </motion.div>
          <a
            href=""
            className="flex items-center"
          ></a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-blue-500 bg-purple-900 rounded md:bg-transparent md:text-purple-500 md:p-0 "
                  aria-current="page"
                >
                  <HomeIcon></HomeIcon>
                </Link>
              </li>
              
              <li>
                <Link
                  to="/asignaturas/asignaturas"
                  className={
                    loc == "asignaturas"
                      ? "block py-2 pl-3 pr-4 text-blue-500 bg-purple-900 rounded md:bg-transparent md:text-purple-500 md:p-0 "
                      : "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-blue-500 "
                  }
                >
                  Apuntes
                </Link>
              </li>
              <li>
                <Link
                  to="/examenes/examenes"
                  className={
                    loc == "examenes"
                      ? "block py-2 pl-3 pr-4 text-blue-500 bg-purple-900 rounded md:bg-transparent md:text-purple-500 md:p-0 "
                      : "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-blue-500 "
                  }
                >
                  Exámenes
                </Link>
              </li>
              <li>
                <a
                  href="/contacto/contacto"
                  className={
                    loc == "contacto"
                      ? "block py-2 pl-3 pr-4 text-blue-500 bg-purple-900 rounded md:bg-transparent md:text-purple-500 md:p-0 "
                      : "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-blue-500 "
                  }
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="/about/about"
                  className={
                    loc == "about"
                      ? "block py-2 pl-3 pr-4 text-blue-500  bg-purple-900 rounded md:bg-transparent md:text-purple-500 md:p-0 "
                      : "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-blue-500 "
                  }
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Helmet>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </Helmet>
    </>
  );
}
