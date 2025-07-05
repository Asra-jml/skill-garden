import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div className="pt-16 bg-black text-center">
  <p className="text-base text-gray-400 mb-8">Trusted by learners from</p>

  <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
    {[assets.microsoft_logo, assets.walmart_logo, assets.accenture_logo, assets.adobe_logo, assets.paypal_logo].map((logo, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-4 md:p-4 shadow-inner hover:shadow-xl transition-all duration-300"
      >
        <img
          src={logo}
          alt={`Company ${index}`}
          className="md:w-28 w-20 object-contain"
        />
      </div>
    ))}
  </div>
</div>


  );
};

export default Companies;
