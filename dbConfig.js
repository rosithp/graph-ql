const url = require('url');

const params = url.parse('postgres://postgres:password-1@localhost:5432/school');
const auth = params.auth ? params.auth.split(':') : [];

module.exports = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
};
