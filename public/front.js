'use strict';
console.log('front.js file was loaded');

const API_URL = 'http://localhost:3000';

const els = {
  form: document.forms[0],
  postsContainer: document.querySelector('#posts'),
};

els.form.addEventListener('submit', addNewPostHandler);

function addNewPostHandler(e) {
  e.preventDefault();
  const newPostObj = {
    title: els.form.elements.title.value,
    content: els.form.elements.content.value,
    date: els.form.elements.date.value,
  };
  console.log(newPostObj);
  addNewPost(newPostObj);
}

function addNewPost(newPostObj) {
  fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPostObj),
  })
    .then((response) => response.json())
    .then((postsArr) => {
      console.log(postsArr);
    });
}

// sukurti nauja posta su forma ir gauti atsakyma

// sugeneruoti esamus postus htmle
function renderPosts(postsArr) {}
