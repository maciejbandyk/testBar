class ToolbarComponent {
  constructor(msg, position) {
    this.msg = msg;
    this.position = position;
  }

  addNewToolbar() {

      var naviWrapper = document.createElement("div");
      var message = document.createElement("span");
      var button = document.createElement("button");

      button.innerText = "Get Widgets";
      button.className = "button";
      button.setAttribute("id", "Btn");
      naviWrapper.className = "navigation-wrapper";
      message.innerText = this.msg;
      message.className = "text";

      var bar = document.getElementById('navigation');
      bar.appendChild(naviWrapper);
      naviWrapper.appendChild(message);
      naviWrapper.appendChild(button);
    }
}
//tests



let tolbar = new ToolbarComponent("Add beautiful widgets to your website", "top");
tolbar.addNewToolbar();

document.getElementById("Btn").addEventListener("click", function(){
  alert("Hello world!");
});
