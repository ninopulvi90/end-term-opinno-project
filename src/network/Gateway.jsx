import getData from './GetRequestHandler';

const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = (errorHandler) =>
  getData(JSON_PLACEHOLDER_BASE_URL, '/posts', null, null, null, errorHandler);

export const getPostsForSingleUser = (id, errorHandler) =>
  getData(JSON_PLACEHOLDER_BASE_URL, '/users', id, 'Posts', '/posts', errorHandler);

export const getPostComments = (id, errorHandler) =>
  getData(JSON_PLACEHOLDER_BASE_URL, '/comments', id, 'Comments', null, errorHandler);

export const getUsers = (errorHandler) =>
  getData(JSON_PLACEHOLDER_BASE_URL, '/users', null, null, null, errorHandler);
  
export const getUserById = (id, errorHandler) =>
  getData(JSON_PLACEHOLDER_BASE_URL, '/users', id, 'Users', null, errorHandler);
