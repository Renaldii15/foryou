import { useEffect, useState } from 'react'
import Image from 'next/image';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import Profesi from './../animations/Profesi';
import AutoTyping from '../../node_modules/react-auto-typing/dist/index.modern';
// import Typist from '../../../node_modules/react-typist/src/Typist';
// import AutoTypings from '../animations/AutoTyping';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Hero =() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const textArray = ['React Native Developer','Laravel Developer'];
  const typingSpeed = 100; // Adjust the speed as needed
  return (
    <div className='container'>
      <div className="conatiner-fluid isolate px-6 lg:px-2 mx-auto">
        <div className="py-16 sm:py-24 lg:py-28" >
          <div className='lg:flex flex-row'>
            <div className="text-left ml-10">
              <h1 className="text-4xl text-white font-bold tracking-tight text-gray-900 sm:text-6xl">
                I'm Ren<span style={{ color:'white' }}>aldi</span>,
              </h1>
              <div className='absolute'>
              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl text-white">
              <AutoTyping
                active // <boolean>
                textRef='Full Stack Developer' // <string>
                // textRef='a React Native Developer' // <string>
                writeSpeed={50} // <number>
                deleteSpeed={50} // <number>
                delayToWrite={1000} // <number>
                delayToDelete={2000} // <number>
              />
              </h5>
              </div>
              <div>
                <p className='mt-20'>
                Owner of a web business specializing in property management for hostels, rentals, apartments, hotels, and various real estate. My expertise also extends to supporting UMKM establishments in the café / restaurant / F&B sector. Explore my portfolio to discover how I can enhance your property management and UMKM ventures through innovative technologies and strategic design. Let's elevate your projects together! 
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-6 mt-10" style={{ position:'absolute' }}>
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default Hero