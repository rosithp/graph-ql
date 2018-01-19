const query = require('../db').query;

exports.all = async () => {
  const address = (await query('SELECT * FROM "address"')).rows;
  return address;
};

exports.find = async studentId => {
  const address = (await query('SELECT * FROM "address" WHERE "studentId" = $1 LIMIT 1', [
    studentId,
  ])).rows[0];
  return address;
};


