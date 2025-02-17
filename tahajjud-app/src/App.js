import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Tahajjud from './pages/Tahajjud';
import Creator from './pages/Creator';


function App() {
  return (


    <Router>
    
      <header className='bg-blue-600 text-white p-4'>
        <nav className='max-w-4xl mx-auto flex justify-between items-center'>
          <div className='flex flex-row justify-center items-center'>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            <img src='/tahajjud-logo.png' className='rounded-full w-20 mr-4'></img>
          </a>

          <h1 className='text-3xl font-bold'>Tahajjud</h1>

          </div>
          <ul className='flex space-x-4'>
            <li><a href="/" className='hover:underline font-bold'>Home</a></li>
            <li><a href="/tahajjud" className='hover:underline font-bold'>Tahajjud</a></li>
            <li><a href="/creator" className='hover:underline font-bold'>Creator</a></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tahajjud" element={<Tahajjud />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>

      <footer className='bg-blue-800 text-white p-8 mt-0'>
        <div className='max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left'>
          <p className='text-sm'>&copy; {new Date().getFullYear()} Tahajjud Times. All rights reserved.</p>

          <ul className='flex space-x-4 mt-2 sm:mt-0'>
            <li><a href="/" className='hover:underline'>Home</a></li>
            <li><a href="/tahajjud" className='hover:underline'>Tahajjud</a></li>
            <li><a href="/creator" className='hover:underline'>Creator</a></li>
          </ul>

          <div className='flex space-x-4 mt-2 sm:mt-0'>
            <a href='https://github.com/srahman14' target='_blank' rel='noopner noreferrer' className='text-xl hover:text-blue-400'>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href='https://www.linkedin.com/in/sayed-r-596b97257/' target='_blank' rel='noopner noreferrer' className='text-xl hover:text-blue-400'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

      </footer>
    </Router>
  );
}

export default App;
