const URL = "http://35.167.51.31/api/booksaralive/licenses";
const URLPool = "http://35.167.51.31/api/booksaralive/pool";

const getJwt = () => {
  let token = localStorage.getItem('token');
  if(!token)
    return '';
  return `Bearer ${token}`;
};

export const fetchLicenses = (bundleId) => {
  const LicensesURL = `${URL}/?find[bundle]=${bundleId}`;
  const jwt = getJwt();
  return fetch(LicensesURL, {
    headers: {'Authorization': jwt }
  }).then(
    res => res.json().then(
    res => res.docs
  ));
};

export const addLicense = (license) => {
  const encodedParams = Object.keys(license).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(license[key]);
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
};

export const addCodes = (file) => {
  const formData = new FormData();
  formData.append('codes',file);
  const jwt = getJwt();

  return fetch(URLPool, {
        method: "post",
        headers: {
          'Authorization': jwt
        },
        body:formData
    }).then(res => res.status);
};
