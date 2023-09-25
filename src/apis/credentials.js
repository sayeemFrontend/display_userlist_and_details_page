const baseUrl = import.meta.env.MODE === 'production' ? 'https://jsonplaceholder.typicode.com' : 'https://jsonplaceholder.typicode.com';

function getTokens() {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('token');
  return { token, refreshToken };
}

function setTokens(option = {}) {
  for (const key in option) {
    localStorage.setItem(key, option[key]);
  }
}

function getHeaders() {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getTokens().token}`,
  };
  return headers;
}

export default { baseUrl, getHeaders, getTokens, setTokens };
