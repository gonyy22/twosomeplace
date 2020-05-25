function openNav() {
  document.querySelector(".sidepanel").style.width = "250px";
  document.querySelector(".sidepanel_dimmed").style.display = "block";
}

function closeNav() {
  document.querySelector(".sidepanel").style.width = "0";
  document.querySelector(".sidepanel_dimmed").style.display = "none"
}

var slideIndex = 1;
showDivs(slideIndex); //기본 첫번째 이미지

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.querySelectorAll(".new_product_slide_img");
  if (n > x.length) {slideIndex = 1} //">"
  if (n < 1) {slideIndex = x.length} //"<"
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "inline-block";
  }

function nextWin(){
  location = "https://www.google.com";
}

function closePopup() {
  document.querySelector(".floating_banner").style.display = "none";
}
