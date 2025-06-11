
/* ====== HOMEPAGE BUTTON ====== */
document.getElementById("aboutBtn").addEventListener("click", function () {
  window.location.href = "about.html";
});

document.getElementById("menuBtn").addEventListener("click", function () {
  window.location.href = "menu.html";
});

/* ====== PROFILE ====== */
window.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("userName");
  const image = localStorage.getItem("userImage");

  if (name) {
    document.getElementById("homeUserName").textContent = name;
  }

  if (image) {
    document.getElementById("homeProfileImage").src = image;
  }
});


/* ====== SLIDER ====== */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change slide every 3 seconds
setInterval(nextSlide, 4000);

function changeSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

/* ====== LOCATION ====== */
function initMap() {
  const popiliciousLocation = { lat: 3.2464791, lng: 101.7328314 }; // IIUM Gombak coordinates

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: popiliciousLocation,
  });

  const marker = new google.maps.Marker({
    position: popiliciousLocation,
    map: map,
    title: "Popilicious @ IIUM Gombak",
  });
}

