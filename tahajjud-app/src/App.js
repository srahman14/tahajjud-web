import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Tahajjud from './pages/Tahajjud';
import Creator from './pages/Creator';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Ramadan from './pages/Ramadan';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPostPage';

function App() {
  return (


    <Router>
    
      <header className='bg-blue-600 text-white p-4'>
        <nav className='max-w-4xl mx-auto flex justify-between items-center'>
          <div className='flex items-center space-x'>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            <img src='/tahajjud-logo.png' className='rounded-full w-20 md:w-12 mr-4'></img>
          </a>

          <h1 className='hidden md:block text-2xl font-bold mr-2'>Tahajjud</h1>

          </div>
          <ul className='flex space-x-6'>
            <li className='p-1'><a href="/" className='hover:underline font-bold'>
                  <i className="fas fa-home text-3xl md:text-2xl lg:text-2xl"></i>
                  <span className="hidden md:inline ml-2">Home</span>
                </a>
            </li>
            <li className='p-1'><a href="/ramadan" className='hover:underline font-bold'>
                  <i className="fa-solid fa-moon text-3xl md:text-2xl lg:text-2xl"></i>
                  <span className="hidden md:inline ml-2">Ramadan</span>
                </a>
            </li>
            <li className='p-1'><a href="/tahajjud" className='hover:underline font-bold'>
                  <i className="fa-solid fa-hands-praying text-3xl md:text-2xl lg:text-2xl"></i>
                  <span className="hidden md:inline ml-2">Tahajjud</span>
                </a>
            </li>
            <li className='p-1'><a href="/blog" className='hover:underline font-bold'>
                  <i className="fa-solid fa-newspaper text-3xl md:text-2xl lg:text-2xl"></i>
                  <span className="hidden md:inline ml-2">Blog</span>
                </a>
            </li>
            <li className='p-1'><a href="/creator" className='hover:underline font-bold'>
                  <i className="fa-regular fa-circle-user text-3xl md:text-2xl lg:text-2xl"></i>
                  <span className="hidden md:inline ml-2">Creator</span>
                </a>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ramadan" element={<Ramadan />} />
        <Route path="/tahajjud" element={<Tahajjud />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>

      <footer className='bg-blue-800 text-white p-8 mt-0'>
        <div className='max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left'>
          <p className='text-sm'>&copy; {new Date().getFullYear()} Tahajjud Times. All rights reserved.</p>

          <ul className='flex space-x-4 mt-2 sm:mt-0'>
            <li>
              <a href="/" className='hover:underline'>
                <span className="md:inline mt-2 mb-2">Home</span>
              </a>
            </li>
            <li>
              <a href="/tahajjud" className='hover:underline'>
                <span className="md:inline mt-2 mb-2">Tahajjud</span>
              </a>
            </li>
            <li>
              <a href="/creator" className='hover:underline'>
                <span className="md:inline mt-2 mb-2">Creator</span>
              </a>
            </li>
          </ul>

          <div className='flex space-x-4 mt-2 sm:mt-0'>
            <a href='https://github.com/srahman14' target='_blank' rel='noopner noreferrer' className='text-xl hover:text-blue-400'>
              <i className="fa-brands fa-github text-3xl md:text-2xl lg:text-2xl"></i>
            </a>
            <a href='https://www.linkedin.com/in/sayed-r-596b97257/' target='_blank' rel='noopner noreferrer' className='text-xl hover:text-blue-400'>
              <i className="fa-brands fa-linkedin text-3xl md:text-2xl lg:text-2xl"></i>
            </a>
          </div>
        </div>

      </footer>
    </Router>
  );
}

export default App;
