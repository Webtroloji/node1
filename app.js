const express = require('express');
const app = express();

app.use('/', (req, res) => {
    app.send('Deneme');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});