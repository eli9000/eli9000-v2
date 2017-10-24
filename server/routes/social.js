import request from 'request';

const {
  MLAB_API
} = process.env

var options = {
  method: 'GET',
  url: 'https://api.mlab.com/api/1/databases/mlab-test-db/collections/social',
  qs: { apiKey: MLAB_API },
  headers:
  {
    // 'postman-token': '164a151a-7c4f-5197-3244-a0ab2324d0dc',
    // 'cache-control': 'no-cache',
    // authorization: 'Basic ZGV2ZWxvcGVyOmRldmVsb3Blcg==',
    // 'content-type': 'application/json'
  },
  // body: '{"name": "wiener"},\n{"date": "today"}'
};


export default (req, res, next) => request(options, (error, response, body) => {
  if (error) throw new Error(error);
  res.send(body);
});
