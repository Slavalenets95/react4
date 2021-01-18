const apiBase = 'https://conduit.productionready.io/api/';

export const getResource = async (url) => {
  try {
    const res = await fetch(`${apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    if (!navigator.onLine) throw new Error('Ops. Check your network connection.');
    throw new Error('Ops. Something went wrong.');
  }
};

export const fetchResource = async (url, body, method, token) => {
  const header = token
    ? { 'Content-Type': 'application/json;charset=utf-8', authorization: `Token ${token}` }
    : { 'Content-Type': 'application/json;charset=utf-8' };
  try {
    const user = await fetch(`${apiBase}${url}`, {
      method: method,
      headers: header,
      body: JSON.stringify(body),
    });
    return user;
  } catch (err) {
    if (!navigator.onLine) throw new Error('Ops. Check your network connection.');
    throw new Error('Ops. Something went wrong.');
  }
};

export const getArticles = async (page, limit) => {
  const offset = (page - 1) * 5;
  const { articles } = await getResource(`articles?limit=${limit}&offset=${offset}&tag=AngularJS`);
  return articles;
};

export const getArticle = async (slug) => {
  const article = await getResource(`articles/${slug}`);
  return article;
};

export const register = async (data) => {
  const user = await fetchResource('users', data, 'POST');
  const result = await user.json();
  return result;
};

export const authentification = async (data) => {
  const user = await fetchResource('users/login', data, 'POST');
  const result = await user.json();
  return result;
};

export const editProfile = async (data, token) => {
  const newUser = await fetchResource('user', data, 'PUT', token);
  const result = await newUser.json();
  return result;
};

export const createArticle = async (data, token) => {
  const responce = await fetchResource('articles', data, 'POST', token);
  const result = await responce.json();
  return result;
};

export const editArticle = async (data, slug, token) => {
  const responce = await fetchResource(`articles/${slug}`, data, 'PUT', token);
  const result = await responce.json();
  return result;
};

export const deleteArticle = async (slug, token) => {
  const responce = await fetchResource(`articles/${slug}`, null, 'DELETE', token);
  const result = await responce.json();
  return result;
};

export const likeArticle = async (slug, token) => {
  const responce = await fetchResource(`articles/${slug}/favorite`, null, 'POST', token);
  const result = await responce.json();
  return result;
};

export const unlikeArticle = async (slug, token) => {
  const responce = await fetchResource(`articles/${slug}/favorite`, null, 'DELETE', token);
  const result = await responce.json();
  return result;
};
