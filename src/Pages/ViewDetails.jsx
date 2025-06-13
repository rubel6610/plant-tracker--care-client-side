import React from 'react';
import { useLoaderData, useNavigate, useNavigation} from 'react-router-dom';
import Navbar from '../Components/Navbar';

const ViewDetails = () => {
  const plant = useLoaderData();
  const navigate = useNavigate();
  const Navigation = useNavigation();
  const handleGoBack = ()=>{
    navigate(-1);
  }
  if (Navigation.state === "loading") {
    return <div className="flex justify-center items-center h-screen">
      <span className="loading loading-dots loading-lg text-green-600"></span>
    </div>
  }
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-4 bg-green-100 rounded-xl shadow-md mt-6 text-black text-center">
              <button
        onClick={handleGoBack}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        ← Back
      </button>
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