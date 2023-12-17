import { useEffect, useState } from 'react';
import Post from '../post/Post';
import { getPosts, getUsers } from '../../network/Gateway';

////import * as Gateway from '../../network/Gateway';

export default function PostContainer() {
  const [posts, setPosts] = useState(null);
  //const [isRequestSent, setRequestSent] = useState(false);
  const [postAuthors, setPostAuthors] = useState(null);

  useEffect(() => {
    const getRequest = async () => {
      const [resp1, resp2] = await Promise.all([getPosts(), getUsers()]);

      setPosts(resp1.data);
      setPostAuthors(resp2.data);
    };

    getRequest();
  }, []);

  return (
    <ul>
      {!posts ? (
        <p>Loading posts...</p>
      ) : (
        posts.slice(0, 9).map((post, index) => {
          post.author = postAuthors[index];

          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          );
        })
      )}
    </ul>
  );
}
