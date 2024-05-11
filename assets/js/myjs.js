var slideIndex = 1;
//showSlides("drillbotics", slideIndex);

function openModal(modal) {
    var id = modal + "-modal"
    slideIndex = 1;
    document.getElementById(id).style.display = "block";
}

// Close the Modal
function closeModal(modal) {
    var id = modal + "-modal";
    document.getElementById(id).style.display = "none";
    slideIndex = 1;
}

// Next/previous controls
function plusSlides(modal, n) {
    showSlides(modal, slideIndex += n);
}

// Thumbnail image controls
function currentSlide(modal, n) {
    showSlides(modal, slideIndex = n);
}

function showSlides(modal, n) {
    var i;
    var id = modal + "-modal"
    var capID = modal + "-caption"
    var slides = document.getElementById(id).getElementsByClassName("mySlides");
    var captionText = document.getElementById(capID);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}