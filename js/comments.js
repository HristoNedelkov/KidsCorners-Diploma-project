import uploadComment from "./db-connection.js";
const btn = document.querySelector("#btn-input");
const comments = document.querySelector(".comments");

function postComment(name, message) {
 uploadComment(name, message);
  const div = `
  <div class="commentsBox">
            <h2>Comment By <span>${name}</span> </h2>
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
  postComment(inputs[0].value, inputs[1].value);
  inputs.forEach((e) => {
    e.value = "";
  });
});
