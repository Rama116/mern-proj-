// import React from 'react'
import ItemsContainer from "../Footer/ItemsContainer"
import SocialIcons from "../Footer/SocialIcons"
// import { Icons } from  './Menu';
const footer = () => {
    return (
        <>
            <footer className="bg-slate-50 text-white">
                <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                    <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-yellow-500 font-bold"><span className="text-black">Learn</span>ENG</h1>
                    <div className="space-y-3">
                        <input type="text" placeholder="Any Queries" className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 py-2.5 rounded px-2 focus:outline-none hover:border-b-2 hover:border-yellow-500" />
                        <button className="bg-yellow-500 hover:bg-teal-600kk duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
                            Send 
                        </button>
                    </div>
                </div>
                <ItemsContainer />
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
                >
                    <span className="text-black font-semibold">© 2020 Appy. All rights reserved.</span>
                    <span className="text-black font-semibold">Terms · Privacy Policy</span>
                    <SocialIcons />
                </div>
            </footer>
        </>
    )
}

export default footer