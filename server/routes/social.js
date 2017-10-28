import request from 'request';

const {
  MLAB_API
} = process.env

var options = {
  method: 'GET',
  url: 'https://api.mlab.com/api/1/databases/mlab-test-db/collections/social',
  qs: { apiKey: MLAB_API }
};


export default (req, res, next) => request(options, (error, response, body) => {
  if (error) throw new Error(error);
  res.send(body);
});
