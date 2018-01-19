const express = require('express');
const expressGraphQL = require('express-graphql')

const schema = require('./graphQL/root')

const app = express();
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true,
}));

app.listen(8080, () => { console.log(' server listening at port 8080') });
