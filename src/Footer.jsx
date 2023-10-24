import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p><a className="hover:text-blue-500"target="_blank" href="https://github.com/luisnisc">Luis</a> <span className='text-blue-500'>&</span> <a className='hover:text-blue-500' target="_blank" href="https://github.com/unaiccz">Unai</a></p>
        <a href="https://github.com/luisnisc/Clase-react" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-blue-500 text-2xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;