const root = document.getElementById("root");
const innerClass = () => {
  const container = document.createElement("div");
  container.classList.add("container");
  const flipper = document.createElement("div");
  flipper.classList.add("flip-container");
  const HTML = `
    <div class = "flipper">
      <div class="front">
        <div class = "front-bg">
          <img src="./assets/logo.png">
        </div>
      </div>
      <div class="back">
        <div class = "back-bg">
          <img src="./assets/logo.png">
        </div>
        <div class = "back-conent">
          <h1>Stylish Joker</h1>
          <p>PTK - DTMA</p>
          <div class = "icons">
            <div class = "icon-group">
              <span class = "bold"><i class="fa-solid fa-phone"></i></span>
              <span class = "contact">0362272070</span>
              <div class = "icon-group">
                <span class = "bold"><i class="fa-solid fa-envelope"></i></i></span>
                <a class = "contact">animetplink@gmail.com</a>
              </div>
              <div class = "icon-group">
                <span class = "bold"><i class="fa-solid fa-globe"></i></span>
                <a class = "contact">www.xyz.com</a>
              </div>
            </div>
          </div>
          <a href="https://www.facebook.com/nobless.anime/"  target = "_blank"class = "icon-box"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" target = "_blank" class = "icon-box"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" target = "_blank" class = "icon-box"><i class="fa-brands fa-google"></i></a>
          <a href="#" target = "_blank" class = "icon-box"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" target = "_blank" class = "icon-box"><i class="fa-brands fa-dribbble"></i></a>
          <a href="https://github.com/stylishjoker" target = "_blank" class = "icon-box"><i class="fa-brands fa-github"></i></a>
        </div>
        
      </div>
    </div>
  `;
  flipper.innerHTML = HTML;
  container.appendChild(flipper);
  root.appendChild(container);
};
const intro = () => {
  const intro = document.createElement("div");
  intro.classList.add("intro");
  let HTML = "";
  for (var i = 0; i < 4; i++) {
    HTML += `<span class = "tile-${i + 1}"></span>`;
  }
  const svg = document.createElement("svg");
  intro.innerHTML = HTML;
  root.appendChild(intro);

  setTimeout(() => {
    root.removeChild(intro);
    root.style.background = "none";
    innerClass();
  }, 3400);
};
intro();
// innerClass();
// <svg width="100vw" height="100vh" id="svg"></svg>
//background
$(document).ready(function () {
  var array = [];
  var heightWindow = $(window).height();
  var widthWindow = $(window).width();

  for (var i = 0; i < 60; i++) {
    array.push({
      top: Math.floor(Math.random() * heightWindow),
      left: Math.floor(Math.random() * widthWindow),
      id: i,
    });
  }
  array.forEach(function (value) {
    var newEllipse = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "ellipse"
    );
    newEllipse.setAttribute("class", "ellipse");
    newEllipse.setAttribute("id", "ellipse_" + value.id);
    newEllipse.setAttribute("cx", value.left);
    newEllipse.setAttribute("cy", value.top);
    newEllipse.setAttribute("rx", 5);
    newEllipse.setAttribute("ry", 5);

    $("#svg").append(newEllipse);
  });

  $(window).mousemove(function (event) {
    $("line").remove();
    array
      .filter(
        (val) =>
          Math.abs(val.top - event.pageY) <= 350 &&
          Math.abs(val.left - event.pageX) <= 350
      )
      .forEach(function (value) {
        var newLine = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        newLine.setAttribute("class", "line");
        newLine.setAttribute("id", "line_" + value.id);
        newLine.setAttribute("x1", value.left);
        newLine.setAttribute("y1", value.top);
        newLine.setAttribute("x2", event.pageX);
        newLine.setAttribute("y2", event.pageY);
        newLine.setAttribute("stroke", "black");
        $("#svg").append(newLine);
      });
  });
  $(window).mouseout(function (event) {
    $("line").remove();
  });
  setInterval(function () {
    // Math.random()*(max - min ) + min
    array.forEach(function (value, key) {
      var top =
        Math.random() * (value.top + 2 - (value.top - 2)) + (value.top - 2);
      var left =
        Math.random() * (value.left + 2 - (value.left - 2)) + (value.left - 2);
      array[key].top = top;
      array[key].left = left;

      var $ellipse = $("#ellipse_" + value.id);
      $ellipse.animate(
        { dot: 0 },
        {
          step: () => {
            $ellipse.attr("cx", left), $ellipse.attr("cy", top);
          },
          duration: 1,
        }
      );

      if ($("#line_" + value.id).lengh) {
        var $line = $("#line_" + value.id);
        $line.animate(
          { dot: 0 },
          {
            step: () => {
              $line.attr("x1", left), $line.attr("y1", top);
            },
            duration: 1,
          }
        );
      }
    });
  }, 500);
});

//
