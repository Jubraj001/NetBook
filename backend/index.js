const connectToMongo = require('./db');
const express = require('express');
const auth = require('./routes/auth');
const notes = require('./routes/notes');

connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());

// Available Routes
app.use('/api/auth',auth);
app.use('/api/notes',notes);

app.listen(port, () => {
  console.log(`Netbook backend listening on port ${port}`)
})
