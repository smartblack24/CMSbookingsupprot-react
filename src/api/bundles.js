import encoder from 'form-urlencoded';

const URL = "http://35.167.51.31/api/booksaralive/bundles"

const getJwt = () => {
  let token = localStorage.getItem('token');
  if(!token)
    return '';
  return `Bearer ${token}`;
}

export const fetchBundles = () => {
  return fetch(URL, {
    headers: {'Authorization': getJwt() }
  }).then(res => res.json());
};

export const addBundle = (bundle) => {
  const jwt = getJwt();
  return fetch(URL, {
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Authorization': jwt
        },
        body:encoder(bundle)
    }).then(res => res.json());
};

export const getBundle = id => {
  const jwt = getJwt();
  return fetch(`${URL}/${id}`, {
    headers: {'Authorization': jwt }
  }).then(res => res.json());
};

export const editBundle = ({id, distribution})  => {
  return fetch(`${URL}/${id}`,{
        method: "put",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Authorization': getJwt()
        },
        body:encoder({distribution})
    }).then(res => res.json());
}
