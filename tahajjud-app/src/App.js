import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Creator from './pages/Creator';

function App() {
  return (


    <Router>
      <header className='bg-blue-600 text-white p-4'>
        <nav className='max-w-4xl mx-auto flex justify-between items-center'>
          <h1 className='text-xl font-bold'>Tahajjud</h1>
          <ul className='flex space-x-4'>
            <li><a href="/" className='hover:underline font-bold'>Home</a></li>
            <li><a href="/creator" className='hover:underline font-bold'>Creator</a></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>
    </Router>
  );
}

export default App;
