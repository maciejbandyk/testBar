class ToolbarComponent {
  constructor(msg, position) {
    this.msg = msg;
    this.position = position;
  }

  addNewToolbar() {

      var naviWrapper = document.createElement("div");
      var message = document.createElement("span");
      var button = document.createElement("button");
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

      bar.appendChild(naviWrapper);
      naviWrapper.appendChild(message);
      naviWrapper.appendChild(button);
    }
}

document.getElementById("Btn").addEventListener("click", function(){
  alert("Hello world!");
});
