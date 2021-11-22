import React, { useState } from 'react'

function Modal() {

    const [isOpen, setIsOpen] = useState(false);
    const show = isOpen ? "block" : "hidden"


    return (
        <div className=" flex justify-center ">
            <div className=" absolute top-14 flex justify-center flex-col items-center sm:top-10">
                
                {/* Button */}
                <div className=" z-40 ">
                    <div onClick={()=> setIsOpen(!isOpen)} className=" bg-grey h-14 w-14 rounded-full border-dashed border-4 border-cheesyYellow flex justify-center items-center text-2xl transition-all duration-200 transform hover:scale-105  cursor-pointer  ">
                        <i className="fas fa-biohazard text-offWhite hover:text-accent "></i>
                    </div>
                </div>

                {/* Content Container */}
                <div className={" z-20 bg-darkestGrey relative -top-5 rounded-2xl border-2 px-4 pt-14 pb-8 border-offWhite shadow-2xl flex gap-5 flex-col justify-center items-center font-roboto text-offWhite " + show }>
                    {/* Heading */}
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-3xl">YOUR WEEKLY GOAL</h1>
                        <h2 className="text-lg text-lightGrey ">Read content you love to stay updated</h2>
                    </div>
                    
                    {/* Content List*/}
                    <div className=" flex flex-col w-full gap-4 ">

                        <div className="flex gap-3 ">
                            <div className="text-2xl">
                                <i className="fas fa-angle-double-up"></i>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-sm" > Bronze Level</h1>
                                <h3 className="text-sm text-lightGrey">Read at least one article on different days</h3>
                            </div>
                        </div>

                        <div className="flex gap-3 ">
                            <div className="text-2xl">
                                <i className="fas fa-angle-double-up"></i>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-sm" > Bronze Level</h1>
                                <h3 className="text-sm text-lightGrey">Read at least one article on different days</h3>
                            </div>
                        </div>

                        <div className="flex gap-3 ">
                            <div className="text-2xl">
                                <i className="fas fa-angle-double-up"></i>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-sm" > Bronze Level</h1>
                                <h3 className="text-sm text-lightGrey">Read at least one article on different days</h3>
                            </div>
                        </div>

                        <div className="flex gap-3 ">
                            <div className="text-2xl">
                                <i className="fas fa-angle-double-up"></i>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-sm" > Bronze Level</h1>
                                <h3 className="text-sm text-lightGrey">Read at least one article on different days</h3>
                            </div>
                        </div>

                        
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Modal
