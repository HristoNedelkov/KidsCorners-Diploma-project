const btn = document.querySelector("#btn-input");
const comments = document.querySelector(".comments");

function postComment(name, message) {
  const div = `
  <div class="commentsBox">
            <h2>Comment By <span>${name.value}</span> </h2>
            <p>${message.value}</p>
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
  postComment(inputs[0], inputs[1]);
  inputs.forEach((e) => {
    e.value = "";
  });
});
