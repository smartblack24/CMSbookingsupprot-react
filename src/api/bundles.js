const URL = "http://35.167.51.31/api/booksaralive/bundles"

export const fetchBundles = () => {
  return fetch(URL).then(res => res.json())
    .then(res => res.docs);
}

export const addBundle = (bundle) => {
  const searchParams = Object.keys(bundle).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(bundle[key]);
  }).join('&');

  return fetch(URL, {
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body:searchParams
    }).then(res => res.json());
}
