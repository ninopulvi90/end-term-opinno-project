import Axios from 'axios';

const defaultErrorHandler = (error) => {
  if (error.response) {
    console.error('Errore HTTP:', error.response.status, error.response.data);

    if (error.response.status === 404) {
      console.log('ERRORE 404 - Pagina non trovata');
      //setErrore(true);
    }
  } else if (error.request) {
    console.error('ERROR: Qualcosa è andato storto durante l\'invio della richiesta', error.request);
  } else {
    console.error(
      'Errore durante la configurazione della richiesta:',
      error.message
    );
  }
};

 const getData = (baseUrl, endPoint, id, errorHandler = defaultErrorHandler) => {
  let url = `${baseUrl}${endPoint}`;

  if (id) {
    console.log('ID => ' + id);
    url = url + `?postId=${id}`;
    console.log('URL => ' + url);
  }

  return Axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      errorHandler(error);
    });
};

export default getData;