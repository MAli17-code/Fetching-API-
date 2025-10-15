"use client";
import React from 'react';
import Superheroes from './superheros/Superheroes'

const Homepage = () => {

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Superhero Quotes</h1>
      {/* <input
        type="text"
        placeholder="Search by author..."
        className="w-full max-w-md p-2 mb-6 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      /> */}
      <Superheroes />
    </div>
  )
}

export default Homepage

