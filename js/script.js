var write = document.querySelector(".modal-button");
var popup = document.querySelector(".write-to-us");
var close = popup.querySelector(".modal-close");
var names = popup.querySelector("[name=name]");

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  names.focus();
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
  }
}
});