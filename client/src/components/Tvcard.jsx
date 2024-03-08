import React, { useState } from 'react';

const Tvcard = () => {
  const [isSlided, setIsSlided] = useState(false);

  const handleMouseEnter = () => {
    setIsSlided(true);
  };

  const handleMouseLeave = () => {
    setIsSlided(false);
  };

  return (
        <div
        className="relative w-64 h-96 overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <div
            className={`absolute inset-0 bg-cover transition-transform duration-500 ${
            isSlided ? 'translate-x-1/3' : ''
            }`}
            style={{
            backgroundImage: 'url(https://example.com/card-background.jpg)',
            }}
        />
        <div
            className={`absolute inset-0 bg-cover transition-transform duration-500 ${
            isSlided ? '-translate-x-1/3' : ''
            }`}
            style={{
            backgroundImage: 'url(https://example.com/card-foreground.jpg)',
            }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500">
            <div
            className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ${
                isSlided ? 'opacity-100' : ''
            }`}
            >
            <div className="text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Card Title</h2>
                <p className="text-lg">Card Description</p>
            </div>
            </div>
        </div>
        </div>
  );
};

export default Tvcard;