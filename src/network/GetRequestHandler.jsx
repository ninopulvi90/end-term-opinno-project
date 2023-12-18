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

const getData = (
  baseUrl,
  endPoint,
  id,
  idFor,
  endPoint2,
  errorHandler = defaultErrorHandler
) => {
  let url = `${baseUrl}${endPoint}`;

  if (idFor === 'Comments') {
    console.log('ID => ' + id);
    url = url + `?postId=${id}`;
    console.log('URL => ' + url);
  } else if (idFor === 'Posts') {
    url = url + `/${id}${endPoint2}`;
  } else if (idFor === 'Users') {
    url = url + `/${id}`;
  }

  return Axios.get(url)
    .then((response) => response)
    .catch((error) => {
      errorHandler(error);
    });
};

export default getData;
