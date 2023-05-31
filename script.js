let btnLike = document.getElementById("btn-like");
let likeSpan = document.getElementById("like-span");

btnLike.addEventListener("click", (e) => {
  e.preventDefault();
  window.localStorage.setItem(" like", likeSpan.innerHTML++);
});

// comment
let formComment = document.getElementById("form-comment");
let btnComment = document.getElementById("btn-comment");
let commentName = document.getElementById("comment-name");
let commentText = document.getElementById("comment-text");
let commentContact = document.getElementById("comment-contact");
btnComment.addEventListener("click", (e) => {
  e.preventDefault();
  const Name = formComment.input1.value;
  const Text = formComment.input2.value;
  console.log(typeof Name);
  commentContact.innerHTML = `<h4>${Name}</h4> <br> <p>${Text}</p>`;

});
