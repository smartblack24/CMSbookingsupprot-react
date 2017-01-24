const URL = "http://35.167.51.31/api/booksaralive//licenses/?find[bundle]=";

const getJwt = () => {
  let token = localStorage.getItem('token');
  if(!token)
    return '';
  return `Bearer ${token}`;
}

export const fetchLicenses = (bundleId) => {
  const LicensesURL = `${URL}${bundleId}`;
  const jwt = getJwt();
  return fetch(LicensesURL, {
    headers: {'Authorization': jwt }
  }).then(res => res.json());
}
