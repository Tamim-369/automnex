'use client';

import { BrainCog, Code2, Rocket } from 'lucide-react';

const services = [
    {
        icon: <BrainCog className="w-7 h-7 text-white" />,
        title: 'LLM Chatbot Development',
        description:
            'Build advanced LLM-powered chatbots that understand context, use tools, and deliver natural responses.',
        features: [
            'Prompt engineering',
            'Custom LLM fine-tuning',
            'RAG implementation',
            'Multi-lingual support',
            'Context-aware responses',
            'Enterprise data integration',
        ],
    },
    {
        icon: <Code2 className="w-7 h-7 text-white" />,
        title: 'SaaS Dashboard Builder',
        description:
            'Plug-and-play dashboards to visualize your SaaS metrics, powered by AI and intuitive APIs.',
        features: [
            'Real-time metrics visualization',
            'Customizable widgets',
            'AI-powered insights',
            'API integrations',
            'User access control',
        ],
    },
    {
        icon: <Rocket className="w-7 h-7 text-white" />,
        title: 'LLM PDF Q&A Agent',
        description:
            'Upload PDFs and get instant, context-aware answers powered by cutting-edge LLM embeddings.',
        features: [
            'Semantic PDF content extraction',
            'Contextual real-time answers',
            'Multi-document support',
            'Lightning-fast response times',
            'Intuitive user interface',
        ],
    },
    {
        icon: <Rocket className="w-7 h-7 text-white" />,
        title: 'LLM PDF Q&A Agent',
        description:
            'Upload PDFs and get instant, context-aware answers powered by cutting-edge LLM embeddings.',
        features: [
            'Semantic PDF content extraction',
            'Contextual real-time answers',
            'Multi-document support',
            'Lightning-fast response times',
            'Intuitive user interface',
        ],
    },
    {
        icon: <Rocket className="w-7 h-7 text-white" />,
        title: 'LLM PDF Q&A Agent',
        description:
            'Upload PDFs and get instant, context-aware answers powered by cutting-edge LLM embeddings.',
        features: [
            'Semantic PDF content extraction',
            'Contextual real-time answers',
            'Multi-document support',
            'Lightning-fast response times',
            'Intuitive user interface',
        ],
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative z-10 py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-bl from-transparent via-gray-500/20 border-y  to-transparent text-white "
        >
            {/* Subtle black & white grid background with very low opacity */}
            <div
                className="absolute inset-0 pointer-events-none bg-[url('/grid.svg')] bg-repeat opacity-5"
                aria-hidden="true"
            />

            <div className="relative max-w-7xl xl:max-w-6xl mx-auto">
                <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight text-white">
                    Our Premium Services
                </h2>

                <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, i) => (
                        <div className="w-full max-w-md bg-black/20 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden">
                            <div className="p-6 bg-black/30 ">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-white/10 rounded-full">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-200 mb-4">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-2">
                                            <span className="text-white">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
