import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PlantsTable from '../Components/PlantsTable';
import Navbar from '../Components/Navbar';

const AllPlants = () => {
    const data = useLoaderData();
    return (
        <div>
            <Navbar />
           <h1 className='mt-5'>plants:{data.length}</h1>
           <div>
            {
                data.map(plant=><PlantsTable key={plant._id} plant={plant}></PlantsTable>)
            }
           </div>
        </div>
    );
};

export default AllPlants;