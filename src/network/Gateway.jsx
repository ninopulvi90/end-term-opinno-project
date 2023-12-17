import getData from './GetRequestHandler';

const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = (errorHandler) =>
  getData(JSON_PLACEHOLDER_BASE_URL, '/posts', null, errorHandler);

export const getPostComments = (id, errorHandler) =>
  getData(JSON_PLACEHOLDER_BASE_URL, '/comments', id, errorHandler);

export const getUsers = (errorHandler) =>
  getData(JSON_PLACEHOLDER_BASE_URL, '/users', null, errorHandler);
