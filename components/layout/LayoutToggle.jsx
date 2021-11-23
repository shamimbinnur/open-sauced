import React from 'react'
import { useGridContext } from '../contexts/gridContext';


function LayoutToggle() {

    const { isGrid, setIsGrid } = useGridContext();

    console.log(isGrid)
    const position = isGrid ? "left-0" : "right-0"

    

    return (
        <div className=" bg-darkestGrey md:pt-8 pb-5 md:pb-14">
            <div className="container flex justify-center ">
                <div className="bg-saucyRed w-20 h-8 rounded-xl flex items-center cursor-pointer relative  text-grey text-md ">
                    <div className={ "absolute bottom-0.1 w-10 h-10 rounded-xl bg-gray-100   " + position  }></div>
                    <div onClick={ ()=> setIsGrid(true)} className=" z-10 flex-1 flex justify-center "> <i className="fas fa-th-large transition "></i> </div>
                    <div onClick={ ()=> setIsGrid(false)} className=" z-10 flex-1 flex justify-center "> <i className="fas fa-th-list "></i> </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutToggle
