import React, { useState, useEffect } from 'react';

const Rating = ({ initialRating, onRate }) => {

    const [rating, setRating] = useState(initialRating || 0);

    const handleRating = (value) => {
        setRating(value);
        if (onRate) onRate(value);
    };

    useEffect(() => {
        if (initialRating) {
            setRating(initialRating);
        }
    }, [initialRating]);

    return (
        <div className="flex gap-2 bg-black p-2 rounded-md">
  {Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    return (
      <span
        key={index}
        onClick={() => handleRating(starValue)}
        className={`text-xl sm:text-2xl cursor-pointer transition-colors duration-200 
          ${starValue <= rating ? 'text-yellow-400' : 'text-gray-600 hover:text-teal-400'}`}
      >
        &#9733;
      </span>
    );
  })}
</div>
    );
};

export default Rating;