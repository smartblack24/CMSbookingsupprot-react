const URL = "http://35.167.51.31/api/booksaralive/bundles"

const getJwt = () => {
  let token = localStorage.getItem('token');
  if(!token)
    return '';
  return `Bearer ${token}`;
}

export const fetchBundles = () => {
  const jwt = getJwt();
  return fetch(URL, {
    headers: {'Authorization': jwt }
  }).then(res => res.json());
}

export const addBundle = (bundle) => {
  const encodedParams = Object.keys(bundle).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(bundle[key]);
  }).join('&');

  const jwt = getJwt();

  return fetch(URL, {
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Authorization': jwt
        },
        body:encodedParams
    }).then(res => res.json());
}
