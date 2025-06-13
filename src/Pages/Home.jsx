import React from 'react';
import Banner from '../Components/Banner';
import NewPlants from '../Components/NewPlants';
import GeneralMistakes from '../Components/GeneralMistakes';
import PrimaryLevelPlants from '../Components/PrimaryLevelPlants';

const Home = () => {
    return (
        <>
        
            <Banner/>
            <NewPlants/>
            <GeneralMistakes/>
            <PrimaryLevelPlants/>

        </>
    );
};

export default Home;