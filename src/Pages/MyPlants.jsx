import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';;
import Navbar from '../Components/Navbar';
import Swal from 'sweetalert2';

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    const getmyplant = async () => {
      const email = user?.email;
      try {
        await fetch(`http://localhost:3000/myplants?email=${email}`)
          .then(res => res.json())
          .then(data => {
            setMyPlants(data)
          })
      } catch (error) {
        console.log(error?.message);
      }
    };
    getmyplant()

  }, [user]);

 const handleDelete = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#38a169',
    cancelButtonColor: '#e53e3e',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3000/plants/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            const remaining = myPlants.filter(plant => plant._id !== id);
            setMyPlants(remaining);
            Swal.fire({
              icon: "success",
              title: "Successfully deleted",
              confirmButtonColor: '#38a169',
            });
          }
        })
        .catch(error => {
          Swal.fire({
            title: {error},
            text: 'Something went wrong while deleting the plant.',
            icon: 'error',
            confirmButtonColor: '#e53e3e',
          });
        });
    }
  });
};
  

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto my-10 p-4">
        <h2 className="text-2xl font-bold mb-4 text-green-700">🌿 My Plants ({myPlants.length})</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-green-500">
              <tr>
                <th className="p-2 border">No</th>
                <th className="p-2 border">Plant Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myPlants.map((plant, index) => (
                <tr key={plant._id} className="text-center odd:bg-amber-600 even:bg-gray-500">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{plant.name}</td>
                  <td className="border p-2">{plant.category}</td>
                  <td className="border p-2 flex justify-center gap-2">
                    <Link to={`/update-plant/${plant._id}`} className="btn btn-sm btn-info">Update</Link>
                    <button onClick={() => handleDelete(plant._id)} className="btn btn-sm btn-error text-white">Delete</button>
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
