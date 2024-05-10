function openModal1() {
    document.getElementById("myModal1").style.display = "block";
}

// Close the Modal
function closeModal1() {
    document.getElementById("myModal1").style.display = "none";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption1");
    if (n > slides.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1 - 1].style.display = "block";
}




function openModal2() {
    document.getElementById("myModal2").style.display = "block";
}

// Close the Modal
function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    console.log(n);
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    //var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
}