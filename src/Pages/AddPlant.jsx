import React from 'react';

const AddPlant = () => {
    const handleAddPlant = (e)=>{
        e.preventDefault();
        const form=e.target;
        const formData = new FormData(form);
        const addPlantData = Object.fromEntries(formData.entries());
        console.log(addPlantData);
    }
    return (
       <div className="max-w-2xl mx-auto my-10 bg-gradient-to-r from-green-100 via-green-300 to-amber-300 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6  text-center text-green-700">🌱 Add a New Plant</h2>
      <form onSubmit={handleAddPlant} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Plant Name</label>
          <input type="text" name="name" required className="p-2 rounded outline text-black w-full" />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Image URL</label>
          <input type="text" name="image" required className="p-2 rounded outline text-black w-full" />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Category</label>
          <select name="category" className="p-2 rounded outline text-black w-full" required>
            <option>Indoor</option>
            <option>Outdoor</option>
            <option>Flowering</option>
            <option>Succulent</option>
            <option>Herb</option>
          </select>
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Watering Frequency (days)</label>
          <input type="number" name="wateringFrequency" required className="p-2 rounded outline text-black w-full" />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Last Watered Date</label>
          <input type="date" name="lastWatered" required className="p-2 rounded outline text-black w-full" />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Next Watering Date</label>
          <input type="date" name="NextwateringDate" required className="p-2 rounded outline text-black w-full" />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Description</label>
          <textarea name="description" rows="4" required className="p-2 rounded outline text-black w-full" />
        </div>
        <button type="submit" className="btn btn-success w-full text-white">Add Plant</button>
      </form>
    </div>
    );
};

export default AddPlant;