'use client'
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                companyName: '',
                budget: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="min-h-screen flex flex-col justify-center items-center border-t pt-12 w-full">
            {/* Header */}
            <div className="w-full text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white px-4">
                    <b>Hey 👋 Wanna</b> Start Something Great?
                </h1>
            </div>
            <div className="flex items-center justify-center p-4 w-full">
                {/* Form Side */}
                <div className="w-full sm:w-11/12 lg:w-9/12 xl:w-7/12 p-6 md:p-8">
                    {submitStatus === 'success' ? (
                        <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-white text-center">
                            Thank you for your message! We'll get back to you soon.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="flex sm:flex-row flex-col gap-3">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors"
                                    required
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col gap-3">
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Company Name (Optional)"
                                    className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors"
                                />
                                <input
                                    type="text"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    placeholder="Budget"
                                    className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors"
                                />
                            </div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Explain your project in few sentences"
                                rows={4}
                                className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors resize-none"
                                required
                            />
                            {submitStatus === 'error' && (
                                <div className="text-red-500 text-sm">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black py-3 rounded-xl duration-200 font-medium cursor-pointer hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Let\'s Go!'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;