require('dotenv').config()

const port = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./database/models/post');

const postRoute = require('./routes/post.route');
const userRoute = require('./routes/user.route');



mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => 'You are now connected to Mongo!')
  .catch(err => console.error('Something went wrong', err))

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/static', express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.render('index', {
        posts
    });
});

app.use('/posts', postRoute);
app.use('/users', userRoute);

app.listen(port, () => {
    console.log('Server listing on port ' + port);
}); 