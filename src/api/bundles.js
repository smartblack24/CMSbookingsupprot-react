const URL = "http://35.167.51.31/api/booksaralive/bundles"

export const fetchBundles = () => {
  const token = localStorage.getItem('token');
  return fetch(URL, {
    headers: {'Authorization': `Bearer ${token}`}
  }).then(res => res.json());
}

export const addBundle = (bundle) => {
  const encodedParams = Object.keys(bundle).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(bundle[key]);
  }).join('&');

  return fetch(URL, {
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body:encodedParams
    }).then(res => res.json());
}
