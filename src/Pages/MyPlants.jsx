import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';;
import Navbar from '../Components/Navbar';

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
 const getmyplant = async ()=>{
    const email = user?.email;
    try{
        await fetch(`http://localhost:3000/plants?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyPlants(data)
        })
    }catch(error){
            console.log(error?.message);
        }
 };
 getmyplant()
  
  }, [user]);

  return (
<>
<Navbar/>
    <div className="max-w-4xl mx-auto my-10 p-4">
      <h2 className="text-2xl font-bold mb-4 text-green-700">🌿 My Plants ({myPlants.length})</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-green-500">
            <tr>
              <th className="p-2 border">Plant Name</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myPlants.map(plant => (
              <tr key={plant._id} className="text-center odd:bg-amber-600 even:bg-gray-500">
                <td className="border p-2">{plant.name}</td>
                <td className="border p-2">{plant.category}</td>
                <td className="border p-2 flex justify-center gap-2">
                  <Link to={`/update-plant/${plant._id}`} className="btn btn-sm btn-info">Update</Link>
                  <button className="btn btn-sm btn-error text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>);
};

export default MyPlants;
