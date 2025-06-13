import React from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const ViewDetails = () => {
    const plants = useLoaderData();
    const {id}=useParams();
    const plant = plants.find(plan=>plan._id == id);
    const Navigation = useNavigation();
    if(Navigation.state === "loading"){
      return  <div className="flex justify-center items-center h-screen">
      <span className="loading loading-dots loading-lg text-green-600"></span>
    </div>
    }
    return (
        <>
        <Navbar/>
        <div className="max-w-3xl mx-auto p-4 bg-green-100 rounded-xl shadow-md mt-6 text-black text-center">
      <h2 className="text-2xl  font-bold mb-4">{plant.name}</h2>
      <img
        src={plant.image}
        alt={plant.name}
        className="w-64 h-64 mx-auto object-cover rounded mb-4"
      />
      <p><strong>Category:</strong> {plant.category}</p>
      <p><strong>Care Level:</strong> {plant.careLevel}</p>
      <p><strong>Watering Frequency:</strong> Every {plant.wateringFrequency} days</p>
      <p><strong>Last Watered:</strong> {plant.lastWatered}</p>
      <p><strong>Next Watering Date:</strong> {plant.nextWateringDate}</p>
      <p><strong>Health Status:</strong> {plant.healthStatus}</p>
      <p><strong>Description:</strong> {plant.description}</p>
      <p><strong>Added By:</strong> {plant.userName} ({plant.userEmail})</p>
    </div>
    </>);
};

export default ViewDetails;