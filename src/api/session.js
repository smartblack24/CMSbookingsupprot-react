const fakeDB = {
  admin: {
    username: 'admin',
    pwd: 'admin',
  }
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const login = (username, password) =>
  delay(500).then(()=> {
      if(username === fakeDB.admin.username && password === fakeDB.admin.pwd){
        const user = {
          id: 122,
          username,
          type: 'admin',
          jwt: '1lkjslaijsdoai.kahksa.aslhasdku'
        };
        return user;
      }
        throw Error('user doesnt exist!');
  });
