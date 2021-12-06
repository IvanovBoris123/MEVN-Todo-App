const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

// Once the connection is established, callback
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.use('/todos', require('./routes/todos.js'));

app.listen( PORT, () => {
    console.log("Server is running on port " + PORT);
});
