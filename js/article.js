const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let articleID = urlParams.get('id')
console.log('ArticleID: '+articleID);

import { data } from "./config.js";
fetch(`${data}posts/${articleID}`)
.then(resart => resart.json())
.then(article => {
    console.log(article);
    let articleContainer = document.querySelector('#w');
    articleContainer.innerHTML = '<h3 class="w3-container">'+article.title+'</h3><small  class="w3-padding">Published: '+article.date+', Modified: '+article.metadata.modified+'</small>'+'<div class="content">'+article.content+'</div>';
    // to be continued...
})
