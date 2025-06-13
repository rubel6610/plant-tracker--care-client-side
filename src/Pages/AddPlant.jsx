import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaLeaf } from 'react-icons/fa';


const AddPlant = () => {
  const { user } = useContext(AuthContext);
    
  const handleAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());

    const plantDetails = {
      ...plantData,
      userName: user.displayName,
      userEmail: user.email,
    };

    fetch('http://localhost:3000/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Plant Added!',
            text: 'Your plant has been successfully added.',
            icon: 'success',
            confirmButtonColor: '#38a169',
          });
          form.reset();
         
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: ' Error!',
          text: 'Something went wrong while adding the plant.',
          icon: 'error',
          confirmButtonColor: '#e53e3e',
        });
      });
  };

  return (
    <div className="max-w-2xl mx-auto my-10 bg-gradient-to-r from-green-100 via-green-300 to-amber-300 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl flex items-center justify-center gap-2 font-bold mb-6 text-center text-green-700">
        <FaLeaf/> Add a New Plant
      </h2>
      <form onSubmit={handleAddPlant} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            required
            className="p-2 rounded outline text-black w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Plant Name</label>
          <input
            type="text"
            name="name"
            required
            className="p-2 rounded outline text-black w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Category</label>
          <select
            name="category"
            className="p-2 rounded outline text-black w-full"
            required
          >
            <option value="">Select a category</option>
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
            className="p-2 rounded outline text-black w-full"
            required
          >
            <option value="">Select care level</option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Watering Frequency (e.g., every 3 days)
          </label>
          <input
            type="text"
            name="wateringFrequency"
            required
            className="p-2 rounded outline text-black w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Last Watered Date</label>
          <input
            type="date"
            name="lastWatered"
            required
            className="p-2 rounded outline text-black w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Next Watering Date</label>
          <input
            type="date"
            name="nextWateringDate"
            required
            className="p-2 rounded outline text-black w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Health Status</label>
          <input
            type="text"
            name="healthStatus"
            required
            className="p-2 rounded outline text-black w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            required
            className="p-2 rounded outline text-black w-full"
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-full text-white"
        >
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
