import Axios from 'axios';

const defaultErrorHandler = (error) => {
  if (error.response) {
    if (error.response.status === 404) {
      throw new Error('ERRORE 404 - Pagina non trovata');
    } else {
      throw new Error(
        `ERRORE HTTP: ${error.response.status}${error.response.data}`
      );
    }
  } else if (error.request) {
    throw new Error(
      `ERROR: Qualcosa è andato storto durante l'invio della richiesta - ${error.request}`
    );
  } else {
    throw new Error(
      `ERROR: Errore durante la configurazione della richiesta: - ${error.message}`
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
    .then((response) => response)
    .catch((error) => {
      errorHandler(error);
    });
};

export default getData;
