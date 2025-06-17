import { Phone } from "lucide-react";
import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen flex flex-col justify-center items-center  border-t pt-12 w-full">
            {/* Header */}
            <div className="w-full text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white px-4">
                    <b>Hey 👋 Wanna</b> Start Something Great?
                </h1>
            </div>
            <div className="flex items-center justify-center p-4 w-full">

                {/* Form Side */}
                <div className="w-full sm:w-11/12 lg:w-9/12 xl:w-7/12 p-6 md:p-8">

                    <form className="space-y-5">
                        <div className="flex sm:flex-row flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors"
                                required
                            />
                        </div>
                        <div className="flex sm:flex-row flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Company Name (Optional)"
                                className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors"

                            />
                            <input
                                type="text"
                                placeholder="Budget"
                                className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors"
                            />
                        </div>
                        <textarea
                            placeholder="Explain your project in few sentences"
                            rows={4}

                            className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3  focus:outline-none focus:border-white/25 transition-colors resize-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-white text-black py-3 rounded-xl  duration-200 font-medium cursor-pointer hover:scale-105 transition-all "
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;