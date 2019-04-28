const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 5000

const app = express();
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir));

app.listen(PORT, () => {
    console.log('server is running')
})