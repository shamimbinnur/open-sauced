import React from 'react'

function Post() {
    return (
        <div className=" bg-offWhite rounded-xl p-6 font-roboto  ">
            {/* Avator Container */}
            <div className=" w-full flex gap-x-3 mb-3 ">
                <div className="bg-blue-400 w-10 h-10  rounded-full "></div>
                <div className="bg-blue-400 w-10 h-10  rounded-full "></div>
            </div>
            {/* Title */}
            <div className=" text-grey text-md font-medium mb-6 ">
                <h1> 8 Signs of a having migrane issies </h1>
            </div>
            {/* Date and Time */}
            <div className=" text-lightGrey text-sm mb-2 ">
                <h3> Yesterday - 5 m read time </h3>
            </div>
            {/* Cover photo */}
            <div className="w-full bg-blue-400 h-28 rounded-md mb-2 ">

            </div>
            {/* Action Button Container */}
            <div className=" flex justify-between w-full ">
                {/* Upvote */}
                <div className=" flex justify-center items-center text-xl gap-2 text-grey hover:text-saucyRed cursor-pointer transition-all duration-200  ">
                    <i className="fas fa-arrow-alt-circle-up"></i>
                    <p className="font-bold">5</p>
                </div>

                {/* Comment */}
                <div className=" flex justify-center items-center text-xl gap-2 text-grey hover:text-saucyRed cursor-pointer transition-all duration-200  ">
                    <i className="fas fa-comment-dots"></i>
                    
                    <p className="font-bold" >55</p>
                </div>

                {/* Bookmark */}
                <div className=" flex justify-center items-center text-xl gap-2 text-grey hover:text-saucyRed cursor-pointer transition-all duration-200 ">
                    <i className="fas fa-bookmark"></i>
                    <p className="font-bold" >14</p>
                </div>
            </div>
        </div>
    )
}

export default Post
