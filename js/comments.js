import { uploadComment, getAllComments } from "./db-connection.js";
const btn = document.querySelector("#btn-input");
const comments = document.querySelector(".comments");
(async () => {
  const allComments = await getAllComments();
  const res = await Object.values(allComments.val());
  console.log(res);
  for (const el of Array.from(res)) {
    const { author, comment, email } = el;
    postComment(author, comment, email);
  }
})();
function postComment(name, message, email) {
  const div = `
  <div class="commentsBox">
            <h2>Comment By <span>${name} (${email})</span> </h2>
            <p>${message}</p>
        </div>
  `;
  comments.innerHTML += div;
  return 1;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputs = [
    document.querySelector("#name-input"),
    document.querySelector("#message-input"),
    document.querySelector("#email-input"),
  ];
  let [name, message, email] = inputs.map((e) => e.value);
  postComment(name, message, email);
  uploadComment(name, message, email);
  inputs.forEach((e) => {
    e.value = "";
  });
});
