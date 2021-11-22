import React from 'react'
import Post from '../post/Post'
import { postData } from "./postData"

function Posts() {
    return (
        <div className="bg-darkestGrey py-6 w-full min-h-screen">
            <div className=" container grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4 ">
                {
                    postData.map((item, i)=>(
                        <Post data={item} key={i}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Posts
