"use client"
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import BookCallModal from '../BookCallModal';

const TestimonialsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Helper function to get avatar initials from name
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    return (
        <div className="min-h-screen bg-transparent relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="relative z-10 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 mb-6">
                            <Star className="w-4 h-4 text-gray-400 fill-gray-400" />
                            <span className="text-sm text-gray-300 font-medium">Trusted by thousands</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                                What People
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                                Are Saying
                            </span>
                        </h2>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Join thousands of satisfied customers who've transformed their workflow with our cutting-edge solutions
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`group relative transition-all duration-700 ease-out ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-20'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 200 + 300}ms`
                                }}
                                onMouseEnter={() => setActiveCard(testimonial.id)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Card */}
                                <div className="relative h-full  p-8 rounded-3xl bg-transparent backdrop-blur-xl border border-gray-700 hover:border-gray-600/70 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                                    {/* Subtle Glow Border Effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-700/20 via-gray-600/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                    {/* Inner Card */}
                                    <div className="relative z-10 h-full flex flex-col">
                                        {/* Quote Icon */}
                                        <div className="mb-6">
                                            <Quote className="w-8 h-8 text-gray-600 group-hover:text-gray-400 transition-colors duration-300" />
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 text-gray-400 fill-gray-400 group-hover:fill-gray-300 group-hover:text-gray-300 transform group-hover:scale-110 transition-all duration-300"
                                                    style={{ transitionDelay: `${i * 100}ms` }}
                                                />
                                            ))}
                                        </div>

                                        {/* Content */}
                                        <blockquote className="text-gray-200 text-lg leading-relaxed mb-8 flex-grow group-hover:text-gray-100 transition-colors duration-300">
                                            "{testimonial.content}"
                                        </blockquote>

                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            {/* Avatar - Image or Initials */}
                                            <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-300">
                                                {testimonial.image ? (
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold text-sm group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300">
                                                        {testimonial.avatar || getInitials(testimonial.name)}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white group-hover:text-gray-100 transition-colors duration-300">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                                    {testimonial.role} at {testimonial.company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-800/10 via-gray-700/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Inner Shadow */}
                                    <div className="absolute inset-0 rounded-3xl shadow-inner shadow-black/20 group-hover:shadow-black/40 transition-shadow duration-500"></div>
                                </div>

                                {/* Floating Particle Effect */}
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-500/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gray-600/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-150"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className={`text-center mt-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`} style={{ transitionDelay: '1000ms' }}>
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-gray-100 to-white text-black font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/25 hover:from-white hover:to-gray-50 cursor-pointer"

                            onClick={() => setIsModalOpen(true)}
                        >
                            <span className="relative z-10">Join Thousands of Happy Customers</span>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                        </button>
                    </div>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default TestimonialsSection;