import React, { useEffect, useState } from 'react'
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { HiOutlineSparkles } from "react-icons/hi"
import Input from './input';
import Post from './post';

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  )

  console.log(posts);
  return (
    <section className='sm:ml-[81px] xl:ml-[340px] w-[600px] min-h-screen border-r border-gray-700 text-white py-2'>
      <div className='sticky top-0 bg-black flex justify-between font-medium text-[20px] px-4 py-2 border-b border-gray-700'>
        <h1 className='font-bold'>Home</h1>
        <HiOutlineSparkles className='text-cyan-400' />
      </div>
      <Input />

      {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post.data()} />
      ))}

    </section>
  )
}

export default Feed