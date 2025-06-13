import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const PlantsTable = ({ plant }) => {
 
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300 text-black">
        <thead>
          <tr className="bg-green-200">
            <th className="border border-gray-300 p-2">Plant Name</th>
            <th className="border border-gray-300 p-2">Category</th>
           
            <th className="border border-gray-300 p-2">Watering Frequency (days)</th>
           
            <th className="border border-gray-300 p-2">Actions</th>
         
          </tr>
        </thead>
        <tbody>
            <tr  className="text-center odd:bg-white even:bg-gray-50">
             
              <td className="border border-gray-300 p-2">{plant.name}</td>
              <td className="border border-gray-300 p-2">{plant.category}</td>
             
              <td className="border border-gray-300 p-2">{plant.wateringFrequency}</td>
              <td className="border border-gray-300 p-2">
                <Link to={`/all-plants/${plant._id}`} className="hover:bg-green-200 px-2 py-1 ">View Details</Link>
              </td>
            
            </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default PlantsTable;
