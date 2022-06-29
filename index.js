"use strict";
const showMssg = document.querySelector("#message-show");
const formMssg = document.querySelector("#message-form");
const formLink = document.querySelector("#link-form");
const inputMssg = document.querySelector("#message-input");
const inputLink = document.querySelector("#link-input");
const { hash } = window.location;
const mssgRevealed = atob(hash.replace("#", ""));

if (mssgRevealed) {
  formMssg.classList.add("hide");
  showMssg.classList.remove("hide");

  document.querySelector("h1").innerHTML = mssgRevealed;
}

formMssg.addEventListener("submit", (event) => {
  event.preventDefault();

  formMssg.classList.add("hide");
  formLink.classList.remove("hide");

  const encrypted = btoa(inputMssg.value);
  inputLink.value = `${window.location}#${encrypted}`;
});

inputLink.addEventListener("click", () => {
  inputLink.select();
  inputLink.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputLink.value);
});
