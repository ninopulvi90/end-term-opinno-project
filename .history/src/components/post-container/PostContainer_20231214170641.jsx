import { useEffect, useState } from 'react';
import Post from '../post/Post';

export default function PostContainer() {
  const posts = [
    {
      userId: 1,
      id: 1,
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      body: 'Quas incidunt iure, porro, blanditiis esse voluptates voluptate sapiente ut animi eos repudiandae suscipit enim labore reprehenderit ullam quos delectus. Dignissimos, provident?',
    },
    {
      userId: 2,
      id: 2,
      title: 'Ajeje Barzov',
      body: 'wewe',
    },
  ];

  const [post, setPost] = useState(null);
  //const [index, setIndex] = useState();
  console.log(post);

  // useEffect(()=>{
    
  // }
  // ,[]);

  return (
    <ul>
      {posts.forEach((post, index) => {
        // setIndex(index);
        setPost(post);
        <Post post={post} />;
      })}
      {/* <Post post = {post}/> */}
    </ul>
  );
}
