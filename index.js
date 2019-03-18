const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3001);
app.use(parser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(app.get('port'), () => {
    console.log('✅ port: ' + app.get('port'));
});