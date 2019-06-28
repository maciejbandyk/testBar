class ToolbarComponent {
  constructor(msg, position) {
    this.msg = msg;
    this.position = position;
  }

  draw() {
    var toolbar = document.getElementById('navigation');
    toolbar.innerHTML = this.position;
  }


}
//tests
let tolbar = new ToolbarComponent("asdasd", 2);
tolbar.draw();
//tolbar.wyswietl();
