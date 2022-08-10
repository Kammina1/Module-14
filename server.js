const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('sequelize');


const app = express();
const PORT = process.env.PORT || 3001;

// app.get('/', (req, res) => res.send ('hello world!'))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

// app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);