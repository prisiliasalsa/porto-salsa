import React from 'react'
import img from "../../assets/almetupn.png"

const Hero = () => {

    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <section id="home" className="pt-36">
        <div className="absolute w-72 h-72 bg-rose-300/40 blur-3xl rounded-full 
                top-20 left-10"></div>

        <div className="absolute w-60 h-60 bg-rose-600/20 blur-3xl rounded-full 
                    top-60 left-52"></div>
        <div className="absolute w-52 h-52 bg-rose-400/30 blur-3xl rounded-full 
                    bottom-10 right-10"></div>

        <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-wrap items-center">
                <div className="w-full self-center px-4 lg:w-1/2">
                    <h1 className="text-base font-bold text-gray-700 md:text-4xl"> Hi! I'm <span className="block font-bold text-rose-800 text-7xl">Prisilia Salsabila Loleh</span>   </h1>
                    <h2 className="font-medium text-gray-500 text-lg mt-3 mb-20 lg:text-xl"> Information Systems Student at Universitas Brawijaya </h2>
                    <p className="font-medium text-rose-400 mb-7 leading-relaxed">Frontend Developer — Staff Muda KBMDSI PIT 
                    </p>

                    <button onClick={() => scrollToSection('#contact')} className="text-base font-semibold text-white bg-gray-700 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out hover:scale-120">Contact Me
                    </button>
                </div>

                <div className="w-full self-end px-4 lg:w-1/2">
                    <div className="relative mt-10 lg:mt-9 lg:right-0">
                        <img src={img} alt="Prisilia Salsabila Loleh" className="max-w-full mx-auto"/>
                    </div>

                </div>

            </div>
            

        </div>
    
    </section>
  )
}

export default Hero
