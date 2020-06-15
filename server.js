require('dotenv').config()

const port = process.env.PORT || 3000;
const ngrok = require('ngrok');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const Post = require('./database/models/post');
const User = require('./database/models/user.model')

const postRoute = require('./routes/post.route');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');

ngrok.connect({
    proto : 'http',
    addr : port
}, (err, url) => {
    if (err) {
        console.error('Error while connecting Ngrok',err);
        return new Error('Ngrok Failed');
    } else {
        console.log('Tunnel Created -> ', url);
        console.log('Tunnel Inspector ->  http://127.0.0.1:4040');
    }
});

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => 'You are now connected to Mongo!')
  .catch(err => console.error('Something went wrong', err))

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/static', express.static('public'));
app.use(expressSession({
    secret: process.env.SESSION_SECRET
}));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', async (req, res) => {
    const posts = await Post.find({})
    const users = await User.find({})
    res.render('index', {
        posts,
        users
    });
});

app.use('/posts', postRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);



app.listen(port, () => {
    console.log('Server listing on port ' + port);
}); 