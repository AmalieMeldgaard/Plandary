// sign in button
document
  .querySelector(".welcome_signin")
  .addEventListener("click", function () {
    window.location.href = "../login/signIn.html";
  });

// signin to home
document.querySelector(".signin").addEventListener("click", function () {
  window.location.href = "../home/home.html";
});

// home to scan
document.querySelector(".scan__img").addEventListener("click", function () {
  window.location.href = "..scan/scan.html";
});
