import { useEffect, useState } from 'react';
import Post from '../post/Post';

export default function PostContainer() {
  const postsArr = [
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

  return (
    <ul>
      {postsArr.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      
    </ul>
  );
}
