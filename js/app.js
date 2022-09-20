"use strict";

async function cards() {
  const text = await fetch("https://jsonplaceholder.typicode.com/comments");

  const results = await text.json();

//   console.log(results);

  results.forEach((comment)=>{
    const commentItem=createElement('div','card p-4 m-2 rounded-4 border-2',`<h3>Title: ${comment.name}</h3>
    <p>Email: ${comment.email}</p> <p> Body: ${comment.body} </p>`)

    $('.box').appendChild(commentItem)
  })
}

cards()