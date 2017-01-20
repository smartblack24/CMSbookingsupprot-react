const fakeDB = {
  admin: {
    email: 'admin@admin.com',
    pwd: 'admin',
  }
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const login2 = (email, password) =>
  delay(500).then(()=> {
      if(email === fakeDB.admin.email && password === fakeDB.admin.pwd){
        const user = {
          id: 122,
          email,
          role: 'admin',
          token: '1lkjslaijsdoai.kahksa.aslhasdku'
        };
        return user;
      }
        throw Error('user doesnt exist!');
  });

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
    }).then(res => res.json());
}
