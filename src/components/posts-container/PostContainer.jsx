import { useEffect, useState } from 'react';
import Axios from 'axios';

import gateway from '../../network/Gateway';

import Post from '../post/Post';

const fakeJson = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  }
];

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
      {/* {posts.map((post, index) => (
        <div key={index}>
          <Post post={post} />
        </div>
      ))} */}

{fakeJson.map((post, index) => (
        <div key={index}>
          <Post post={post} />
        </div>
      ))}


      {/* {console.log(posts)} */}
      {/* )} */}
    </ul>
  );
}
