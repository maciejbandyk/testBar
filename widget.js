class TaskBar {
  constructor(options) {
    this.message = options.message || "Some default message";
    this.position = options.position || "top";
    this.buildWidget();
    this.renderDomContent();

  }

  buildWidget() {
    this.wrapper = document.createElement('div');
    this.wrapper.className= "component-wrapper "+ this.position;

    this.markup = `<span class="task-message"></span>
    <button class="task-button">Click Me!</button>
    <div class="task-close">x</div>`;

    this.wrapper.innerHTML = this.markup;

    this.msg = this.wrapper.getElementsByClassName('task-message').item(0);
    this.msg.innerText = this.message;
    this.btn = this.wrapper.getElementsByClassName('task-button').item(0);
    this.cls = this.wrapper.getElementsByClassName('task-close').item(0);
    this.btn.onclick = () => alert('test');
    this.cls.onclick = () => TaskBar.fadeOutEffect();
  }

  renderDomContent() {
    document.body.append(
      this.wrapper
    );
  }

  static fadeOutEffect() {
    var fadeTarget = document.getElementsByClassName("component-wrapper").item(0);
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
  }

}

let taskBar = new TaskBar({
  message: 'Add beautifull widget to your site!',
  position: 'top'
});
