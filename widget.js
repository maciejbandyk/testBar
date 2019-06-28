class ToolbarComponent {
  constructor(msg, position) {
    this.msg = msg;
    this.position = position;
  }

  addNewToolbar() {

      var naviWrapper = document.createElement("div");
      var message = document.createElement("span");
      var button = document.createElement("button");
      var closeElement = document.createElement("div");
      var bar = document.getElementById('navigation');


      if (this.position == "bottom") {
        bar.className = "bottomMenu";
      }

      if (this.position == "initial") {
        bar.className = "hidden";
      }

      button.innerText = "Get Widgets";
      button.className = "button";
      button.setAttribute("id", "Btn");
      naviWrapper.className = "navigation-wrapper";
      message.innerText = this.msg;
      message.className = "text";
      closeElement.innerText = "X";
      closeElement.setAttribute("id", "Close");
      closeElement.className = "closing"

      bar.appendChild(naviWrapper);
      naviWrapper.appendChild(message);
      naviWrapper.appendChild(button);
      naviWrapper.appendChild(closeElement);
    }
}


let Toolbar = new ToolbarComponent("asdasdas", "top");
Toolbar.addNewToolbar();

document.getElementById("Close").addEventListener("click", function(){
    var fadeTarget = document.getElementById("navigation");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 20);


document.getElementById("target").addEventListener('click', fadeOutEffect);

});

document.getElementById("Btn").addEventListener("click", function(){
  alert("Hello world!");
});
