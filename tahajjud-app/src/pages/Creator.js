import React from 'react';

function Creator() {
  return (
    <div className="bg-blue-500 p-4 sm:p-6 md:p-12 lg:p-18 w-full min-h-screen flex justify-center items-center">
      <div className="bg-gray-100 p-8 rounded-lg flex flex-1 flex-col mt-0 mb-40 max-w-full sm:max-w-md lg:max-w-lg mx-auto">
        <h1 className="text-4xl font-semibold text-blue-700 mb-4 text-center">Creator</h1>
        <div className='flex flex-col items-center text-center'>
          <img src='madina-logo.jpeg' alt='for creator picture' className="object-cover object-center w-60 h-60 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-xl shadow-blue-gray-900/50"></img>
          <p className='text-blue-700 hover:text-blue-500 text-lg bg-gray-300 p-2 rounded-lg mt-4 font-semibold tracking-tighter'>سعيد الرحمن</p>
          <q className='text-gray-500 italic mt-2 font-semibold'>Actions are judged by niyyāt (intentions)...</q>

          <p className='text-blue-700 text-lg bg-gray-300 p-2 rounded-lg mt-4 font-semibold tracking-tighter'>I only created this site in hopes that it benefits whoever uses it. <span className='block'>Barkallahu Feekum</span></p>
          
          <div className='flex space-x-4 mt-4 bg-gray-300 p-2 rounded-md'>
            <a href='https://github.com/srahman14' target='_blank' rel='noopener noreferrer' className='text-4xl hover:text-blue-500'>
              <i className="fa-brands fa-square-github"></i>
            </a>

            <a href='https://www.linkedin.com/in/sayed-r-596b97257/' target='_blank' rel='noopener noreferrer' className='text-4xl hover:text-blue-500'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creator;
