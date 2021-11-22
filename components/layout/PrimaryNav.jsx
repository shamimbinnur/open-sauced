import React from 'react'
import Image from 'next/image';
import av1 from "../posts/placeholderImages/av01.jpg"

function PrimaryNav() {
    return (
        <nav className="flex bg-offWhite min-h-10 w-full font-roboto font-bold px-4 py-4 sm:py-2  ">
            {/* Branding */}
            <div className=" flex-1 flex text-2xl font-medium items-center ">
                <i className="fas fa-cannabis text-darkGrey mr-4 "></i>
                <h1 className=" text-cheesyYellow " >Open  <span className="text-darkGrey">Sauced</span> </h1>
                
            </div>

            {/* Login and Avatar */}
            <div className=" items-center ">
                {/* If not logged in */}
                {/* <div className="text-md font-medium bg-saucyRed text-gray-100 py-1 px-3 rounded-xl hover:bg-grey hover:text-lighterGrey">
                    Login
                </div> */}

                {/* If logged in */}
                <div className=" rounded-full w-10 h-10 overflow-hidden ring-2 ring-saucyRed ">
                <Image
                    className="object-cover"
                    src={av1}
                    alt="Avatar 02"
                    width={500}
                    height={500}
                />
                </div>
            </div>
            
        </nav>
    )
}

export default PrimaryNav
