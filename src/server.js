const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { port } = require('./config');
const app = express();

// Database
const postsArr = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Body of post 1',
    date: '2020-01-01',
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Body James of post 2',
    date: '2020-01-02',
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Body of buble post 3',
    date: '2020-01-03',
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'Body of post 4',
    date: '2020-01-04',
  },
];

let lastPostId = 4;

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); // for parsing application/json

// Routes
app.post('/posts', (request, response) => {
  const newPostObj = request.body;
  console.log(newPostObj);
  // newPostObj.id = ++lastPostId;
  postsArr.push({
    id: ++lastPostId,
    ...newPostObj,
  });
  response.json(postsArr);
});

app.get('/', (req, res) => {
  res.json({ msg: 'home route' });
});

// GET - /posts - grazins visus postus
app.get('/posts', (req, res) => {
  res.json(postsArr);
});

// GET /posts/search?q=buble - grazina visus postu kuriu content texte yra reiskme buble
app.get('/posts/search', (request, response) => {
  console.log('request.query ===', request.query);
  // pasiimiti q reiksme is query
  const queryTerm = request.query.q;
  console.log('queryTerm ===', queryTerm); // buble
  // ieskoti postsArr content dalyje q reikmes
  const filtered = postsArr.filter((pObj) => {
    const contentLower = pObj.content.toLowerCase();
    const termLower = queryTerm.toLowerCase();
    return contentLower.includes(termLower);
  });
  // jei randam atrikti tuos elementus
  // grazinti ka radom
  response.json(filtered);
});

// GET - /posts/2 - grazins post su id 5
// ?id=5 === req.query
// /2 - dynaminis parametras req.params
app.get('/posts/:postId', (req, res) => {
  console.log('req.params ===', req.params);
  const postId = +req.params.postId;
  console.log('postId ===', postId);
  // surasti posta musu postArr kurio id === postId
  const found = postsArr.find((pObj) => pObj.id === postId);
  console.log('found ===', found);
  // jei neradom
  if (found === undefined) {
    res.status(404).json({
      msg: `Post with id: ${postId} was not found`,
    });
    return;
  }
  res.json(found);
});

// GET - posts/dates - grazins visas postu datas masyve
app.get('/posts/dates', (req, res) => {
  const datesArr = postsArr.map((pObj) => pObj.date);
  console.log('datesArr ===', datesArr);
  res.json(datesArr);
});

// app Listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
