import React from 'react'
import img1 from "../../assets/image.png"
import img2 from "../../assets/IMG_0003.jpg"

const Experience = () => {
  return (
    <section id="experience" class="pt-36 pb-16 bg-orange-950">
        <div class="container mx-auto px-4">
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-rose-200">Experience</h4>
                    <h2 class="font-bold text-rose-50 text-3xl mb-4">Recent Experience</h2>
                    <p class="font-medium text-md text-rose-300">Here are some of my recent experiences in technology and student organization activities. Through these roles, I’ve learned to collaborate in teams, solve real problems, and build my skills both in frontend development and backend fundamentals.</p>


                </div>
            </div>
            <div class="w-full px-4 flex flex-wrap justify-center xl:max-w-5xl xl:mx-auto">
                <div class="mb-14 p-4 md:w-1/2">
                    <div class="rounded-md shadow-md overflow-hidden">
                        <img src={img2} alt="" width="w-full"/>
                    </div> 
                    <h3 class="font-semibold text-xl text-rose-200 mt-5 mb-3"> Staffmuda PIT KBMDSI 2025</h3>
                    <p class="font-medium text-base text-rose-300">I am responsible for building responsive and visually consistent user interface components for internal KBMDSI platforms. Throughout my role, I’ve gained hands-on experience in HTML, CSS (Tailwind), and JavaScript while collaborating with the PIT team to develop intuitive designs that support student activities and organizational workflows.</p>
                </div>
                <div class="mb-14 p-4 md:w-1/2">
                    <div class="rounded-md shadow-md overflow-hidden">
                        <img src= {img1} alt="" width="w-full"/>
                    </div>
                    <h3 class="font-semibold text-xl text-rose-200 mt-5 mb-3"> Member of KSM Android 2024-2025</h3>
                    <p class="font-medium text-base text-rose-300">During my time in KSM Android, I have explored the fundamentals of backend development, starting from REST APIs, basic server logic, data flow, and beginner-level backend architecture. I also learned how backend and frontend communicate, giving me a clearer understanding of full-stack application development and improving my technical foundation for future projects.</p>
                </div>

            </div>
        </div>
     </section>
  )
}

export default Experience
