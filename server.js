const express = require('express');
const res = require('express/lib/response');
const { process_params } = require('express/lib/router');
const app = express();

var port = 5000;

const server = app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})

app.get('/app', (req, res) => {

})

app.use((req, res) => {
    res.status(404).send("Endpoint does not exist 😞");
    // res.type("text/plain");
})