import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import image1 from '../assets/Unknown.jpg';
import image2 from '../assets/Unknown-2.jpg';
import image3 from '../assets/Unknown-3.jpg';
import image4 from '../assets/Unknown-4.jpg';

const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample data for services, descriptions, and images
    const services = [
        {
            title: 'Sister Locs',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            images: [
                image1, image2, image3, image4,
            ]
        },
        {
            title: 'Micro Locs',
            description: 'Sed do eiusmod tempor incididunt ut labore et.',
            images: [
                image1, image2, image3, image4,
            ]
        },
        {
            title: 'Re-twist',
            description: 'Vivamus suscipit tortor eget felis porttitor volutpat.',
            images: [
                image1, image2, image3, image4,
            ]
        },
        {
            title: 'Braiding',
            description: 'Curabitur pretium tincidunt lacus, at ullamcorper metus.',
            images: [
                image1, image2, image3, image4,
            ]
        },
    ];

    // Function to handle tab change
    const handleTabChange = (index) => {
        setActiveTab(index);
        setCurrentImageIndex(0); // Reset to first image when changing tabs
    };

    // Function to open the modal for the image
    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => setIsModalOpen(false);

    // Functions to navigate the carousel images
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % services[activeTab].images.length);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? services[activeTab].images.length - 1 : prevIndex - 1
        );
    };

    // Prevent modal close when clicking on arrows
    const handleArrowClick = (e) => {
        e.stopPropagation(); // This prevents the modal close on arrow button click
    };

    return (
        <div className="max-w-6xl mx-auto py-16">
            <div className="flex justify-center mb-8">
                <div className="flex space-x-8">
                    {services.map((service, index) => (
                        <button
                            key={index}
                            className={`text-xl font-semibold ${activeTab === index ? 'text-blue-500' : 'text-gray-600'}`}
                            onClick={() => handleTabChange(index)}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-3xl font-semibold mb-4">{services[activeTab].title}</h2>
                <p className="text-lg text-gray-600 mb-8">{services[activeTab].description}</p>

                <div className="relative flex justify-center items-center">
                    {/* Image carousel with resized height */}
                    <div className="h-[60vh] w-full max-w-[800px] overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <img
                            src={services[activeTab].images[currentImageIndex]}
                            alt={`Service Image ${currentImageIndex}`}
                            className="w-full h-full object-cover"
                            onClick={() => openModal(currentImageIndex)}
                        />
                    </div>

                    {/* Left and Right arrows next to the carousel */}
                    <button
                        onClick={(e) => { handleArrowClick(e); goToPreviousImage(); }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={(e) => { handleArrowClick(e); goToNextImage(); }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
                    >
                        <FaArrowRight />
                    </button>
                </div>

                {/* Modal for full-screen image view */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        onClick={closeModal}
                    >
                        <div className="relative">
                            <img
                                src={services[activeTab].images[currentImageIndex]}
                                alt="Full Screen Image"
                                className="max-w-full max-h-screen object-contain"
                            />

                            {/* Close modal button */}
                            <button
                                className="absolute top-4 right-4 text-white text-3xl font-bold"
                                onClick={closeModal}
                            >
                                <FaTimes />
                            </button>

                            {/* Left and Right arrows in the full-screen modal */}
                            <button
                                onClick={(e) => { handleArrowClick(e); goToPreviousImage(); }}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                onClick={(e) => { handleArrowClick(e); goToNextImage(); }}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceTabs;
