import { useState } from 'react';
import Post from '../post/Post';

export default function PostContainer() {

  
  const posts = [
    {
      userId: 1,
      id: 1,
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      body: 'Quas incidunt iure, porro, blanditiis esse voluptates voluptate sapiente ut animi eos repudiandae suscipit enim labore reprehenderit ullam quos delectus. Dignissimos, provident?',
    },
  ];

  // [posts, setPosts] = useState(posts);


  return (
    <ul>
      {/* {posts.forEach((post, index) => {
        <Post post={post} />;
      })} */}
      <Post post = {posts[0]}/>
    </ul>
  );
}
