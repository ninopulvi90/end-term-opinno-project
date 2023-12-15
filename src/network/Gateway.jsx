import Axios from 'axios';

const jsonplaceholderBaseUrl = 'https://jsonplaceholder.typicode.com';

const defaultErrorHandler = (error) => {
  if (error.response) {
    console.error('Errore HTTP:', error.response.status, error.response.data);

    if (error.response.status === 404) {
      console.log('ERRORE 404 - Pagina non trovata');
      //setErrore(true);
    }
  } else if (error.request) {
    console.error('Nessuna risposta ricevuta dalla richiesta:', error.request);
  } else {
    console.error(
      'Errore durante la configurazione della richiesta:',
      error.message
    );
  }
};

const defaultResponseHandler = (response, callBack) => {
  callBack([...response.data]);
};

const getData = (
  baseUrl,
  endPoint,
  callBack,
  id,
  errorHandler = defaultErrorHandler,
  responseHandler = defaultResponseHandler
) => {
  let url = `${baseUrl}${endPoint}`;

  if (id) {
    console.log('ID => ' + id);
    url = url + `?postId=${id}`;
    console.log('URL => ' + url);
  }

  Axios.get(url)
    .then((response) => {
      console.log('RESPONSE-HANDLER BEGINS...');
      responseHandler(response, callBack);
    })
    .catch((error) => {
      errorHandler(error);
    });
};

const gateway = {
  getPosts: function (callback, errorHandler, responseHandler) {
    getData(
      jsonplaceholderBaseUrl,
      '/posts',
      callback,
      null,
      errorHandler,
      responseHandler
    );
  },
  getPostComments: function (callback, id, errorHandler, responseHandler) {
    getData(
      jsonplaceholderBaseUrl,
      '/comments',
      callback,
      id,
      errorHandler,
      responseHandler
    );
  },
};

export default gateway;
