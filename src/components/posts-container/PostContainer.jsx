import { useEffect, useState } from 'react';
import Axios from 'axios';

import gateway from '../../network/Gateway';

import Post from '../post/Post';


export default function PostContainer() {
  const [posts, setPosts] = useState([]);

  // const httpGetRequest = (baseUrl, endPoint, setArrayCallback) => {
  //   let url = `${baseUrl}/${endPoint}`;

  //   Axios.get(url)
  //     .then((response) => {
  //       console.log('response status => ' + response.status);
  //       setArrayCallback([...response.data]);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.error(
  //           'Errore HTTP:',
  //           error.response.status,
  //           error.response.data
  //         );

  //         if (error.response.status === 404) {
  //           console.log('ERRORE 404 - Pagina non trovata');
  //           //setErrore(true);
  //         }
  //       } else if (error.request) {
  //         console.error(
  //           'Nessuna risposta ricevuta dalla richiesta:',
  //           error.request
  //         );
  //       } else {
  //         console.error(
  //           'Errore durante la configurazione della richiesta:',
  //           error.message
  //         );
  //       }
  //     });
  // };

  useEffect(() => {
    // httpGetRequest('https://jsonplaceholder.typicode.com', 'posts', setPosts);
  
    gateway.getPosts(setPosts);

  }, []);

  return (
    <ul>
      {/* {posts.length <= 0 && pics.length <= 0 ? (
        <p>Loading data...</p>
      ) : ( */}
      {posts.map((post, index) => (
        <div key={index}>
          <Post post={post} />
        </div>
      ))}
      {/* {console.log(posts)} */}
      {/* )} */}
    </ul>
  );
}
