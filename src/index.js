(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {

    var i = Math.floor(Math.random() * 7);
    document.getElementById("texto").innerHTML = IntroTextos[i];

    i = Math.floor(Math.random() * 2);
    document.getElementById("foto").src = "assets/index/foto" + i + ".png";

  }, false);
}
  ());

