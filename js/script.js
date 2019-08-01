var write = document.querySelector(".modal-button");
var popup = document.querySelector(".write-to-us");
var close = popup.querySelector(".modal-close");
var names = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=e-mail]");
var textarea = popup.querySelector("[name=textarea]");
var slide = document.querySelector(".slide");
var sliderListDesign = document.querySelector("slider-list_design");
var sliderListFormulas = document.querySelector(".slider-list_formulas");
var sliderListWork = document.querySelector(".slider-list_work");
var buttonDesign = document.querySelector(".slider-controls_design");
var buttonFormulas = document.querySelector(".slider-controls_formulas");
var buttonWork = document.querySelector(".slider-controls_work");
var sliderControlButton = document.querySelector(".slider-controls-button");

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

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  });
});

buttonDesign.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonFormulas.classList.remove("active");
  buttonWork.classList.remove("active");
  buttonDesign .classList.add("active");
});

buttonFormulas.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonDesign.classList.remove("active");
  buttonWork.classList.remove("active");
  buttonFormulas.classList.add("active");
});

buttonWork.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonFormulas.classList.remove("active");
  buttonDesign.classList.remove("active");
  buttonWork.classList.add("active");
});

$('.slider-controls_formulas').click(function(){
  $('.slider-list_formulas').css("display", "block");
  $('.slider-list_design').css("display", "none");
  $('.slider-list_work').css("display", "none");
});

$('.slider-controls_design').click(function(){
  $('.slider-list_design').css("display", "block");
  $('.slider-list_formulas').css("display", "none");
  $('.slider-list_work').css("display", "none");
});

$('.slider-controls_work').click(function(){
  $('.slider-list_work').css("display", "block");
  $('.slider-list_formulas').css("display", "none");
  $('.slider-list_design').css("display", "none");
});
