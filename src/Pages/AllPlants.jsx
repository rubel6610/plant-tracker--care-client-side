import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PlantsTable from '../Components/PlantsTable';
import Navbar from '../Components/Navbar';

const AllPlants = () => {
    const data = useLoaderData();
   const datalength = data.length <10 ? `0${data.length}` : data.length;
    return (
        <div>
            <Navbar />
           <h1 className='my-5 text-2xl text-center'>Total Plants: {datalength}</h1>
           <div>
            {
                data.map(plant=><PlantsTable key={plant._id} plant={plant}></PlantsTable>)
            }
           </div>
        </div>
    );
};

export default AllPlants;