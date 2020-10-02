window.onload = function () {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("btnModal");
  var span = document.getElementsByClassName("close")[0];
  console.log(span);

  btn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      modal.style.display = "none";
    }
  });
};
