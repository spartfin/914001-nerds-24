var write = document.querySelector(".modal-button");
var popup = document.querySelector(".write-to-us");
var close = popup.querySelector(".modal-close");
var names = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=e-mail]");
var textarea = popup.querySelector("[name=textarea]");

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  names.focus();
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!names.value || !email.value || textarea.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
});