const btn = document.querySelector("#btn-input");
document.getElementsByClassName("card")[0];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = [
    document.querySelector("#name-input"),
    document.querySelector("#email-input"),
    document.querySelector("#message-input"),
  ];

  console.log(inputs[0].value);
});
