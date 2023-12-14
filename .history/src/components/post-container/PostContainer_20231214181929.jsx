import { useEffect, useState } from 'react';
import Axios from 'axios';

import Post from '../post/Post';

export default function PostContainer() {
  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

  // const postsArr = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  //     body: 'Quas incidunt iure, porro, blanditiis esse voluptates voluptate sapiente ut animi eos repudiandae suscipit enim labore reprehenderit ullam quos delectus. Dignissimos, provident?',
  //   },
  //   {
  //     userId: 2,
  //     id: 2,
  //     title: 'Ajeje Barzov',
  //     body: 'wewe',
  //   },
  // ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(POSTS_URL).then((response) => {
      setPosts(response.data);
      console.log(response);
    });
  }, []);

  return (
    <ul>
      {postsArr.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </ul>
  );
}
