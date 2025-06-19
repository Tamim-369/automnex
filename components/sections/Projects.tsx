'use client';

import { projects } from '@/lib/data';
import { ExternalLink, Eye, Code2, Database, Globe, Smartphone } from 'lucide-react';
import Link from 'next/link';



const getTechIcon = (tech: any) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('react') || techLower.includes('next') || techLower.includes('vue')) {
        return <Code2 className="w-4 h-4" />;
    } else if (techLower.includes('database') || techLower.includes('mongo') || techLower.includes('postgres')) {
        return <Database className="w-4 h-4" />;
    } else if (techLower.includes('mobile') || techLower.includes('native')) {
        return <Smartphone className="w-4 h-4" />;
    }
    return <Globe className="w-4 h-4" />;
};

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative z-10 py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-transparent via-gray-900/80 to-transparent text-white overflow-hidden"
        >
            {/* Animated background grid */}
            <div
                className="absolute inset-0 pointer-events-none bg-[url('/grid.svg')] bg-repeat opacity-5 animate-pulse"
                aria-hidden="true"
            />

            {/* Floating orbs */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-gray-500/20 to-gray-700/20 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover our portfolio of cutting-edge solutions that push the boundaries of technology and innovation
                    </p>
                </div>

                <div className="space-y-32">
                    {projects.map((project: any, index: number) => (
                        <div
                            key={project.id}
                            className={`flex flex-col items-center gap-12 lg:gap-16 ${index % 2 === 0
                                ? 'lg:flex-row lg:text-left'
                                : 'lg:flex-row-reverse lg:text-right'
                                }`}
                        >
                            {/* Project Image */}
                            <div className="flex-1 group">
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className={`flex-1 space-y-8 ${index % 2 === 1 ? 'lg:text-right' : 'lg:text-left'}`}>
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className={index % 2 === 1 ? 'lg:flex lg:flex-col lg:items-end' : ''}>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                                        Tech Stack
                                    </h4>
                                    <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                                        {project.techStack.map((tech: any, techIndex: number) => (
                                            <div
                                                key={techIndex}
                                                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-200 hover:bg-white/10 transition-colors duration-300"
                                            >
                                                {getTechIcon(tech)}
                                                <span>{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className={`flex flex-col sm:flex-row gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                                    {project.viewDetailsLink && (
                                        <Link href={project.viewDetailsLink} className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-600 rounded-2xl font-semibold text-black cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 hover:-translate-y-1">
                                            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                            View Details
                                        </Link>
                                    )}
                                    {project.viewSiteLink && (
                                        <Link href={project.viewSiteLink} className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-600 hover:bg-white/10 hover:border-gray-400 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                            View Live Site
                                        </Link>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}