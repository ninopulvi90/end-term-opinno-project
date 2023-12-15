import { useEffect, useState } from 'react';
import Axios from 'axios';

import Post from '../post/Post';

export default function PostContainer() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const httpGetRequest = (endPoint, setArrayCallback) => {
    let url = `https://jsonplaceholder.typicode.com/${endPoint}`;

    Axios.get(url)
      .then((response) => {
        console.log('response status => ' + response.status);
        setArrayCallback(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            'Errore HTTP:',
            error.response.status,
            error.response.data
          );

          if (error.response.status === 404) {
            console.log('ERRORE 404 - Pagina non trovata');
            //setErrore(true);
          }
        } else if (error.request) {
          console.error(
            'Nessuna risposta ricevuta dalla richiesta:',
            error.request
          );
        } else {
          console.error(
            'Errore durante la configurazione della richiesta:',
            error.message
          );
        }
      });
  };

  useEffect(() => {
    httpGetRequest('posts', setPosts);
    httpGetRequest('users', setUsers);
  }, []);

  return (
    <ol>
      {posts.map((post, index) => (
        <div key={index}>
          {users.forEach((user) => {
            // if (post.userId === user.id) {
            //   post.user = { ...user };
            // }
            
            post.user = (post.userId === user.id) && { ...user };
            console.log(post);
          })}
          <Post post={post} />
        </div>
      ))}
    </ol>
  );
}
