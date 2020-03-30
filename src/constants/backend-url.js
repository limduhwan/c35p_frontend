const API_URLs = {
  test: 'http://localhost:3000',
  local: 'http://localhost:3000',
  // local: 'https://moaapi.c35p.com',
  // dev: 'https://moaapi.c35p.com',
  // stage: 'https://noster-api-stage-910898538.us-west-1.elb.amazonaws.com',
};

// const API_SOCK_URL = API_URLs[process.env.REACT_APP_ENV];

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  const API_SOCK_URL = API_URLs['local'];
};

export {
  API_SOCK_URL,
};
