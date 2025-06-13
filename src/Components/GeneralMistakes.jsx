import React from 'react';

const GeneralMistakes = () => {
    return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">  Plant Care Mistakes Usually people do</h2>
      <div className="max-w-4xl mx-auto space-y-4 px-4">
        <div className="bg-red-400 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">1. Overwatering</h3>
          <p>Giving too much water can rot the roots of your plant.</p>
        </div>
        <div className="bg-red-400 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">2. Not Enough Light</h3>
          <p>Every plant needs a certain amount of light. Know your plant's requirement.</p>
        </div>
        <div className="bg-red-400 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">3. Wrong Soil Type</h3>
          <p>Using the wrong soil mix can stop growth and affect health.</p>
        </div>
      </div>
    </section>

    );
};

export default GeneralMistakes;