import { useEffect, useState } from 'react';
import Post from '../post/Post';
import { getPosts } from '../../network/Gateway';

export default function PostContainer() {
  const [posts, setPosts] = useState(null);
  const [isRequestSent, setRequestSent] = useState(false);

  useEffect(() => {
    if (!isRequestSent) {
      getPosts()
        .then((data) => {
          console.log(data);
          return setPosts(data);
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => setRequestSent(true));
    }
  }, [isRequestSent]);

  return (
    <ul>
      {!posts ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post, index) => {
          return (
            <div key={index}>
              <Post post={post} />
            </div>
          );
        })
      )}
    </ul>
  );
}
