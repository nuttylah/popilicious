document.getElementById("aboutBtn").addEventListener("click", function () {
  window.location.href = "about.html";
});

document.getElementById("menuBton").addEventListener("click", function () {
  window.location.href = "menu.html";
});

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
