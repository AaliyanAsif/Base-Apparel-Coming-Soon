var input = document.querySelector(".email");

var nextButton = document.querySelector(".img-arrow");

var exists;

var errorMessege = document.querySelector(".error-p");

var errorSign = document.querySelector(".error");

input.addEventListener("input", function () {
  if (/[@]/.test(input.value) === true) {
    exists = true;
  }
});

nextButton.addEventListener("click", function () {
  if (exists === true) {
    alert("Email Accepted!");
    exists = false;
    errorMessege.classList.add("hidden");
    errorSign.classList.add("hidden");
  } else {
    errorMessege.classList.remove("hidden");
    errorSign.classList.remove("hidden");

    console.log("check again");
  }
});
