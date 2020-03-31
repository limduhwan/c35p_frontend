const API_URLs = {
  test: 'http://localhost:3000',
  local: 'http://localhost:3000',
  // production: 'http://c35p-book.s3-website.ap-northeast-2.amazonaws.com',
  // stage: 'https://noster-api-stage-910898538.us-west-1.elb.amazonaws.com',
  production: 'http://ec2-13-209-67-212.ap-northeast-2.compute.amazonaws.com:3000',

};

// console.log('process.env.NODE_ENV', process.env.NODE_ENV);

let API_SOCK_URL;
if (process.env.NODE_ENV === 'development') {
  API_SOCK_URL = API_URLs['local'];
}else if(process.env.NODE_ENV === 'production') {
  API_SOCK_URL = API_URLs['production'];
}

export {
  API_SOCK_URL,
};
