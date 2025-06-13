import React from 'react';

const PrimaryLevelPlants = () => {
     const plants = [
    { name: 'Snake Plant', desc: 'Very low maintenance, thrives on neglect.' },
    { name: 'Pothos', desc: 'Grows quickly and needs little light.' },
    { name: 'Spider Plant', desc: 'Great air purifier and easy to propagate.' },
  ];

  
  
  return (
    <section className="py-10 bg-green-100">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">🪴 Beginner-Friendly Plants</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {plants.map((p, i) => (
          <div key={i} className="bg-white text-green-700 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-green-500 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default PrimaryLevelPlants;