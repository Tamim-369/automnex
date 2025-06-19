"use client";
import { faqs } from "@/lib/data";
import React, { useState } from "react";

import { useEffect } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const styles = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `;
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.appendChild(style);

        return () => {
            style.remove();
        };
    }, []);



    return (
        <section id="faq" className="relative w-full min-h-screen px-6 py-10 text-white overflow-hidden border-t flex justify-center items-center">
            {/* Grid background */}
            <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)] before:absolute before:inset-0 before:bg-[url('/grid.svg')] before:opacity-10" />

            {/* Foreground content */}
            <div className="relative max-w-4xl mx-auto z-20">
                <h2
                    className="text-4xl sm:text-6xl mb-10  font-extrabold uppercase tracking-wider z-10 select-none"
                    style={{
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                        color: 'transparent',
                    }}
                >
                    Frequently Asked Questions
                </h2>
                <div className="bg-black/30 backdrop-blur-lg border border-white/15 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 animate-fadeIn">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-white/10 last:border-b-0"
                        >
                            <button
                                className="w-full text-left p-4 md:p-5 text-white text-lg md:text-xl font-semibold flex justify-between items-center bg-gray-800/15 border-b transition-colors duration-200"
                                onClick={() => setOpenIndex(openIndex === index ? 0 : index)}
                            >
                                {faq.question}
                                <span >
                                    {openIndex === index ? (
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M20 12H4"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div
                                    className="p-4 md:p-5 text-gray-300 text-sm md:text-base overflow-hidden transition-max-height duration-300 ease-in-out"
                                    style={{
                                        maxHeight: openIndex === index ? `${faq.answer.length * 0.2 + 100}px` : "0",
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default FAQ;