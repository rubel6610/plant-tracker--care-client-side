import React, { useContext, useEffect, useState } from 'react';
import { GiPalmTree } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NewPlants = () => {
  const [plants, setPlants] = useState([]);
  const {loading,setLoading}=useContext(AuthContext)
  useEffect(() => {
    setLoading(true)
    fetch('https://plant-care-tracker-server-alpha.vercel.app/plants')
      .then(res => res.json())
      .then(data => {
        const newSixplant = data.slice(-6).reverse(); 
        setPlants(newSixplant);
        setLoading(false)
      });
  }, []);
  if(loading){
    return  <div className="flex justify-center items-center h-screen">
      <span className="loading loading-dots loading-lg text-green-600"></span>
    </div>
  }

  return (
    <section className="py-10 bg-green-100">
      <h2 className="text-3xl flex justify-center items-center gap-2 font-bold text-center text-green-800 mb-8"><GiPalmTree/> New Plants</h2>
      <div className="grid md:grid-cols-3  gap-6 max-w-6xl mx-auto px-4">
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
