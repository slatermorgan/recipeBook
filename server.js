const express = require('express');
const app = express();
const routes = require('./api/routes/index')

app.use('/api',require('./api/routes/index'));

app.listen(process.env.port || 3500, function() {
    console.log("Now listening for requests");
});
