"use client";
import React, { useState } from "react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What services does Automnex offer?",
            answer: "Automnex provides advanced LLM-powered chatbot development, including prompt engineering, custom LLM fine-tuning, RAG implementation, multi-lingual support, context-aware responses, and enterprise data integration.",
        },
        {
            question: "How can I get started with Automnex?",
            answer: "To get started, simply fill out the contact form with your details, budget idea, and description. Our team will reach out to you shortly to discuss your project.",
        },
        {
            question: "Is there a cost for initial consultation?",
            answer: "No, the initial consultation is completely free. We’ll assess your needs and provide a tailored solution without any upfront cost.",
        },
        {
            question: "What is the typical project timeline?",
            answer: "The timeline varies based on project complexity, but most projects are completed within 4-8 weeks. We’ll provide a detailed schedule after the initial consultation.",
        },
    ];

    return (
        <section id="faq" className="relative w-full min-h-screen px-6 py-10 text-white overflow-hidden border-t flex justify-center items-center">
            {/* Grid background */}
            <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)] before:absolute before:inset-0 before:bg-[url('/grid.svg')] before:opacity-10" />

            {/* Foreground content */}
            <div className="relative max-w-4xl mx-auto z-20">
                <h2
                    className="text-6xl mb-10  font-extrabold uppercase tracking-wider z-10 select-none"
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
                                className="w-full text-left p-4 md:p-5 text-white text-lg md:text-xl font-semibold flex justify-between items-center hover:bg-black/40 transition-colors duration-200"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.question}
                                <span>
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

// Animation styles
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }
`;

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);
document.adoptedStyleSheets = [styleSheet];

export default FAQSection;