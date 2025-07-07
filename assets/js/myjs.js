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


// Enumerate slideshows
var modals = document.getElementsByClassName('modal-content');
var num_modals = modals.length;
for (i = 0; i < num_modals; i++) {
    var slides = modals[i].getElementsByClassName('mySlides');
    var total_len = slides.length;
    for (j = 0; j < total_len; j++) {
        var slid_num = slides[j].getElementsByClassName('numbertext');
        slid_num[0].innerText = (j + 1) + "/" + total_len;
    }
}


// Enlargable feature images
document.addEventListener('click', e => {
  const img = e.target.closest('.feature-image img');
  if (img) {
    // Get click position relative to image
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    console.log(x,y);

    // Set transform-origin dynamically
    img.style.transformOrigin = `${x}% ${y}%`;

    // Toggle enlarged
    img.classList.toggle('enlarged');
    document.body.classList.toggle('overlay-active', img.classList.contains('enlarged'));

    e.stopPropagation();
  } else {
    document.querySelectorAll('.feature-image img.enlarged').forEach(img => {
      img.classList.remove('enlarged');
    });
    document.body.classList.remove('overlay-active');
  }
});