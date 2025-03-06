import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        telephone: '', // optional telephone field
        preferredContact: 'email', // default to email
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Web3Forms API webhook URL
        const webhookUrl = 'https://api.web3forms.com/submit'; // Replace this with your Web3Forms webhook URL
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('message', formData.message);
        data.append('telephone', formData.telephone); // optional telephone field
        data.append('preferred_contact', formData.preferredContact); // email or telephone
        data.append('access_key', 'c8f305a4-fa3a-4216-8eaa-a76c9fce6b44'); // Replace with your Web3Forms access key

        try {
            setIsSubmitting(true);
            const response = await axios.post(webhookUrl, data);
            if (response.data.success) {
                setFormStatus('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '', telephone: '', preferredContact: 'email' }); // Reset form
            } else {
                setFormStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setFormStatus('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>

            {formStatus && (
                <div className="mb-4 p-4 text-center text-white bg-green-500 rounded-md">
                    {formStatus}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg font-medium">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="p-3 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-medium">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-3 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="telephone" className="text-lg font-medium">Your Telephone (Optional)</label>
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md"
                        placeholder="Optional"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg font-medium mb-2">Your preferred communication channel</label>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="email"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleChange}
                            className="text-blue-500"
                        />
                        <label htmlFor="email" className="ml-2">Email</label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="telephone"
                            name="preferredContact"
                            value="telephone"
                            checked={formData.preferredContact === 'telephone'}
                            onChange={handleChange}
                            className="text-blue-500"
                        />
                        <label htmlFor="telephone" className="ml-2">Telephone</label>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg font-medium mt-2">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="p-3 border border-gray-300 rounded-md"
                        rows="6"
                    />
                </div>

                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
