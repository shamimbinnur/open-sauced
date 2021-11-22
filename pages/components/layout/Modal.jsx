import React from 'react'

function Modal() {
    return (
        <div className=" flex justify-center ">
            <div className=" absolute top-14 sm:top-10">
                <div className=" bg-grey h-14 w-14 rounded-full border-dashed border-4 border-cheesyYellow flex justify-center items-center text-2xl transition-all duration-200 transform hover:scale-105  cursor-pointer  ">
                    <i className="fas fa-braille text-offWhite hover:text-accent  "></i>
                </div>
            </div>
        </div>
    )
}

export default Modal
