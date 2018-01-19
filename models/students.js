const query = require('../db').query;

exports.all = async () => {
  const students = (await query('SELECT * FROM "students"')).rows;
  return students;
};

exports.find = async id => {
  const students = (await query('SELECT * FROM "students" WHERE "id" = $1 LIMIT 1', [
    id,
  ])).rows[0];
  return students;
};


