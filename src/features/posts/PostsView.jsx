import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice'

const PostsView = () => {
    const {isLoading,error,posts } = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])

  return (
    <div className='mt-[5rem] flex flex-wrap justify-center gap-5  '>
     {isLoading && <h4>Loading...</h4>}
     {error && <p>error</p>}
     {posts && posts.map((post)=>{
        return <article key={post.id} className='bg-[#0F172A] w-[30rem] p-10'>
            <h3 className='font-bold text-rose-500'>{post.title}</h3>
            <p>{post.body}</p>
        </article>
     })}
    </div>
  )
}

export default PostsView
