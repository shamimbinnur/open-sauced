import React from 'react'
import { useGridContext } from '../contexts/gridContext'
import PostGrid from '../post/PostGrid'
import PostList from '../post/PostList'
import { postData } from "./postData"

function Posts() {
    const { isGrid, setIsGrid } = useGridContext();

    return (
        <div className="bg-darkestGrey py-6 w-full min-h-screen">
            {
                isGrid ? (
                    <div className=" container grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4 ">
                        {
                            postData.map((item, i)=>(
                                <PostGrid data={item} key={i}/>
                            ))
                        }
                    </div>
                ): (
                    <div className=" container grid gap-3 ">
                        {
                            postData.map((item, i)=>(
                                <PostList data={item} key={i}/>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default Posts
