import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const PlantsTable = ({ plant }) => {
 
  return (
    
            <tr  className="text-center odd:bg-white even:bg-gray-50">
             
             
              <td className="border border-gray-300 p-2">{plant.name}</td>
              <td className="border border-gray-300 p-2">{plant.category}</td>
             
              <td className="border border-gray-300 p-2">{plant.wateringFrequency}</td>
              <td className="border border-gray-300 p-2">
                <Link to={`/all-plants/${plant._id}`} className="hover:bg-green-200 px-2 py-1 ">View Details</Link>
              </td>
            
            </tr>
        
       
  );
};

export default PlantsTable;
