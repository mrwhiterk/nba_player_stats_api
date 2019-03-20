const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const passport = require('./config/passport')()
const userController = require('./controllers/users.js')

const app = express();


app.use(passport.initialize())
app.use(parser.json());
app.use(cors());


app.use('/users', userController)
app.use(require("./routes/index.js"));

app.set("port", process.env.PORT || 3001);
app.listen(app.get('port'), () => {
  console.log('✅ port: ' + app.get('port'));
});
