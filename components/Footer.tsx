import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-transparent py-6">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Copyright Side */}
                <div className="text-white text-sm md:text-base mb-4 md:mb-0">
                    © 2025 Automnex | All rights reserved by Automnex
                </div>

                {/* Social Icons Side */}
                <div className="flex space-x-4">
                    <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                        <IconBrandLinkedin />
                    </Link>
                    <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                        <IconBrandTwitter />
                    </Link>
                    <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                        <IconBrandFacebook />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;