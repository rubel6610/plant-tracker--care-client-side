import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then(res => res.json())
      .then(data => {
        const newSixplant = data.slice(-6).reverse(); 
        setPlants(newSixplant);
      });
  }, []);

  return (
    <section className="py-10 bg-green-100">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">🌱 New Plants</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {plants.map(plant => (
          <div key={plant._id} className="border rounded-lg shadow-md p-4 bg-white">
            <img src={plant.image} alt={plant.name} className="h-40 w-full object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">{plant.name}</h3>
            <p className="text-sm text-gray-600">{plant.category}</p>
            <Link to={`/all-plants/${plant._id}`} className="btn mt-3 bg-green-600 text-white">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPlants;
