import express from 'express';
import expressGraphQL from 'express-graphql'; // glue layer between GraphQL and Express

const app = express();

app.use('/graphql', expressGraphQL({
  // graphiql is a development tool allowing to make queries against a dev server, meant to only be used in dev env
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening');
})