import { useEffect, useState } from 'react';
import Post from '../post/Post';
import { getPosts } from '../../network/Gateway';
import LoadingCircle from '../loading-circle/LoadingCircle';

export default function PostContainer() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resp1 = await getPosts();

      console.log(resp1.data);

      setPosts(resp1.data);
    };

    getData();
  }, []);

  return (
    <ul>
      {!posts ? (
        <LoadingCircle />
      ) : (
        posts.map((post, index)=>
          <li key={index}>
            <Post post={post} />
          </li>
        )
      )}
    </ul>
  );
}
