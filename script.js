document.getElementById("aboutBtn").addEventListener("click", function () {
  window.location.href = "about.html";
});

window.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("userName");
  const image = localStorage.getItem("userImage");

  if (name) {
    document.getElementById("homeUserName").textContent = `Welcome, ${name}!`;
  }

  if (image) {
    document.getElementById("homeProfileImage").src = image;
  }
});
