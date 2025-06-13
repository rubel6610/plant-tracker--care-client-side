import React from 'react';
import Swal from 'sweetalert2';
import { FaLeaf } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const Updateplant = () => {
  const plants = useLoaderData(); 
   const { id } = useParams();
  const plant = plants.find(p=>p._id == id)
  const navigate = useNavigate();
  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());
    fetch(`http://localhost:3000/updateplants/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(plantData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated",
            text: "Your plant updated successfully!",
            icon: "success"
          });
          navigate('/my-plants');
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto my-10 bg-gradient-to-r from-green-100 via-green-300 to-gray-400 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl flex items-center justify-center gap-2 font-bold mb-6 text-center text-green-700">
          <FaLeaf /> Update Plant Details
        </h2>
        <form onSubmit={handleUpdatePlant} className="space-y-4">
          <div>

            
            <label className="block font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={plant.image}
              required
              className="p-2 rounded outline text-black w-full"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Plant Name</label>
            <input
              type="text"
              name="name"
              defaultValue={plant.name}
              required
              className="p-2 rounded outline text-black w-full"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              defaultValue={plant.category}
              className="p-2 rounded outline text-black w-full"
              required
            >
              <option>Succulent</option>
              <option>Fern</option>
              <option>Flowering</option>
              <option>Indoor</option>
              <option>Outdoor</option>
              <option>Herb</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Care Level</label>
            <select
              name="careLevel"
              defaultValue={plant.careLevel}
              className="p-2 rounded outline text-black w-full"
              required
            >
              <option>Easy</option>
              <option>Moderate</option>
              <option>Difficult</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              defaultValue={plant.wateringFrequency}
              required
              className="p-2 rounded outline text-black w-full"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Last Watered Date</label>
            <input
              type="date"
              name="lastWatered"
              defaultValue={plant.lastWatered}
              required
              className="p-2 rounded outline text-black w-full"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Next Watering Date</label>
            <input
              type="date"
              name="nextWateringDate"
              defaultValue={plant.nextWateringDate}
              required
              className="p-2 rounded outline text-black w-full"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              defaultValue={plant.healthStatus}
              required
              className="p-2 rounded outline text-black w-full"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              defaultValue={plant.description}
              required
              className="p-2 rounded outline text-black w-full"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-full text-white"
          >
            Update Plant
          </button>
        </form>
      </div>
    </>
  );
};

export default Updateplant;
