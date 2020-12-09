(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {

    var i = Math.floor(Math.random() * 7);
    document.getElementById("texto").innerHTML = IntroTextos[i];

  }, false);
}
  ());

