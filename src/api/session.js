const URL = "http://35.167.51.31/api/booksaralive/session"

export const login = (email, password) => {
  const params = {email, password};
  const encodedParams = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');

  return fetch(URL, {
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body:encodedParams
    }).then(res => res.json().then(json => {
          if (!res.ok) {
            return Promise.reject(json);
          }
          return json;
        }
      ));
}
