function ShowTestRes(event) {
  var objCur = event.currentTarget
  var objForm = objCur.parentElement
  var num = 0
  if (!objForm.zone1.checked && !objForm.zone4.checked && objForm.zone2.checked && objForm.zone3.checked && objForm.zone5.checked && objForm.zone6.checked) {
    num++
  }
  if (objForm.img.value == "1") {
    num++
  }
  if (objForm.clas.value == "2") {
    num++
  }
  if (num == 3) {
    outputRes.textContent = "Все верно!"
  } else {
    outputRes.textContent = "Что-то неправильно..."
  }
}
var slideIndex = 1;
showSlides(slideIndex);
29

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function ShowAlert(event) {
  alert("Under development!")
}
