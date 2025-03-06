import React from 'react';
import hero from '../assets/hero-image.png';

const AboutUs = () => {
    return (
        <section className="bg-gray-50 py-16 px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
                <p className="text-lg text-gray-600 mb-6">
                    We are a passionate team dedicated to delivering exceptional experiences. Our goal is to inspire and empower individuals to embrace their true potential through our services.
                </p>
                <div className="mb-8">
                    <img
                        src={hero}
                        alt="About Us"
                        className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex justify-center items-center space-x-12">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                        <p className="text-gray-600 mt-2">
                            Milton Keynes, U.K.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
