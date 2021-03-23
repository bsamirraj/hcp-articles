const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const db = require('./config/database');
const root = require('./hcp-articles.resolver')
const schema = require('./hcp-articles.schema')

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();
app.get('/',(req,res)=> res.send('Index'));
//app.use('/articles',require('./routes/articles'));
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));