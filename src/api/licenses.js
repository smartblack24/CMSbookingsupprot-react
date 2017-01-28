const URL = "http://35.167.51.31/api/booksaralive/licenses";

const getJwt = () => {
  let token = localStorage.getItem('token');
  if(!token)
    return '';
  return `Bearer ${token}`;
}

export const fetchLicenses = (bundleId) => {
  const LicensesURL = `${URL}/?find[bundle]=${bundleId}`;
  const jwt = getJwt();
  return fetch(LicensesURL, {
    headers: {'Authorization': jwt }
  }).then(
    res => res.json().then(
    res => res.docs
  ));
}

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
}
