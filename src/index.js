const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8000;
const HOST = '127.0.0.1';

// App
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());


app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
})