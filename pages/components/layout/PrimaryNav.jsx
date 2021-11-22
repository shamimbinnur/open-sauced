import React from 'react'

function PrimaryNav() {
    return (
        <nav className="flex bg-offWhite min-h-10 w-full font-roboto font-bold px-4 py-4 sm:py-2  ">
            <div className=" flex-1 flex gap-4 text-2xl font-medium items-center ">
                <i className="fas fa-cannabis text-darkGrey "></i>
                <h1 className=" text-cheesyYellow " >Open  <span className="text-darkGrey">Sauced</span> </h1>
                
            </div>
            <div className=" items-center ">
                {/* <div className="text-md font-medium bg-saucyRed text-gray-100 py-1 px-3 rounded-xl hover:bg-grey hover:text-lighterGrey">
                    Login
                </div> */}
                <div className=" rounded-full w-10 h-10 bg-blue-400 ">

                </div>
            </div>
            
        </nav>
    )
}

export default PrimaryNav
