export default function About() {
    return (
        <section className="relative w-full px-6 py-10 text-white overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)] before:absolute before:inset-0 before:bg-[url('/grid.svg')] before:opacity-10" />



            {/* Foreground content */}
            <div className="relative max-w-4xl mx-auto z-20">
                <h2
                    className=" text-6xl mb-10 font-extrabold uppercase tracking-wider z-10 select-none"
                    style={{
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                        color: 'transparent',
                    }}
                >
                    About Us
                </h2>
                <p className="text-lg sm:text-xl leading-8 font-light">
                    <span className="font-bold text-white">Automnex</span> is a Generative AI Product Studio based in Bangladesh.
                    We're a team of expert <span className="font-semibold">designers, developers, and product managers</span> engaged in developing cutting edge Gen AI technology.
                </p>

                <p className="mt-6 text-lg sm:text-xl leading-8 font-light">
                    We collaborate with <span className="font-semibold">startups and enterprises</span> to help them automate their business processes using AI and Machine Learning. We specialise in developing AI related products: ChatBot, LLM, Diffusion model, Audio & Vision Model based products. We help our clients to build SaaS, WebApp, Mobile App, and AI products.
                </p>
            </div>
        </section>
    );
}
