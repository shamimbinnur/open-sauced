import React from 'react'
import Post from '../post/Post'
import { postData } from "./postData"

function Posts() {
    return (
        <div className="bg-darkestGrey py-6 w-full">
            <div className=" container ">
                {
                    postData.map(()=>(
                        <Post/>
                    ))
                }
            </div>
        </div>
    )
}

export default Posts
