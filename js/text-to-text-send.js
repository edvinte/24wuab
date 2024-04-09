document
  .getElementById("text-to-text-send")
  .addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      document.getElementById("textfield-main").style.display = "none";
      document.getElementById("main-img-text-div").style.display = "none";
      document.getElementById("result").style.display = "flex";
      document.getElementById("result").textContent = "ai generated content";
    }
  });

document;
