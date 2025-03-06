import React from 'react';
import hero from '../assets/hero-image.png';


const HeroSection = () => {
    return (
        <section className="flex items-center justify-between p-8 bg-gray-100">
            {/* Left Image Section */}
            <div className="w-1/2">
                <img
                    src={hero}
                    alt="Hero Image"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>

            {/* Right Description Section */}
            <div className="w-1/2 pl-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Locs by Frankie</h1>
                <p className="text-xl text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Integer nec odio.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
