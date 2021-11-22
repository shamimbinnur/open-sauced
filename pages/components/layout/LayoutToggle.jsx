import React from 'react'

function LayoutToggle() {
    return (
        <div className=" bg-darkestGrey pt-8 pb-14">
            <div className="container flex justify-center ">
                <div className="bg-saucyRed w-20 h-8 rounded-xl flex items-center gap-2 cursor-pointer relative text-grey text-md ">
                    <div className="absolute bottom-0.1 w-10 h-10 rounded-xl bg-gray-100 transition-all duration-300 right-0  "></div>
                    <div className=" z-10 flex-1 flex justify-center "> <i className="fas fa-th-large transition "></i> </div>
                    <div className=" z-10 flex-1 flex justify-center "> <i className="fas fa-th-list "></i> </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutToggle
