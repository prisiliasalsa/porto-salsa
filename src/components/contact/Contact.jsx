import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="pt-40 pb-32">
            <div class="container mx-auto px-4">
                <div class="w-full px-4">
                    <div class="max-w-xl mx-auto text-center mb-16">
                        <h4 class="font-bold text-lg text-rose-700 mt-7">Contact</h4>
                        <h2 class="font-semibold text-rose-300 text-3xl mb-4">Send a Message!</h2>
                        <p class="font-medium text-md text-rose-950">
                            If you’ve got questions, ideas, or just wanna talk about tech, design, or literally anything that pops into your mind — feel free to drop a message here. I’m always open to new conversations, collaborations, or even random thoughts. Leave your note below and I’ll get back to you as soon as I can!
                        </p>
                    </div>
                </div>

                <form class="max-w-2xl mx-auto">
                    <div class="w-full px-4 mb-8">
                        <label for="name" class="text-base font-bold text-rose-800">Name</label>
                        <input type="text" id="name" class="w-full bg-rose-400 text-red-100 p-3 rounded-md focus:outline-none focus:ring-rose-900 focus:ring-1 focus:border-rose-900"/>
                    </div>

                    <div class="w-full px-4 mb-8">
                        <label for="Email" class="text-base font-bold text-rose-800">Email</label>
                        <input type="email" id="Email" class="w-full bg-rose-400 text-red-100 p-3 rounded-md focus:outline-none focus:ring-rose-900 focus:ring-1 focus:border-rose-900"/>
                    </div>

                    <div class="w-full px-4 mb-8">
                        <label for="Message" class="text-base font-bold text-rose-800">Message</label>
                        <textarea id="Message" class="w-full bg-rose-400 text-red-100 p-3 rounded-md focus:outline-none focus:ring-rose-900 focus:ring-1 focus:border-rose-900 h-32"></textarea>
                    </div>

                    <div class="w-full px-4">
                        <button class="text-base font-semibold text-rose-50 bg-gray-700 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Send</button>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default Contact
