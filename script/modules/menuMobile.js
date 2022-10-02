import OutsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(btn, menu, classActive, events) {
    this.btn = document.querySelector(btn);
    this.menu = document.querySelector(menu);
    this.classActive = classActive;
    this.events = events || ["click", "touchstart"];

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.btn.classList.toggle(this.classActive);
    this.menu.classList.toggle(this.classActive);
    this.btn.ariaExpanded = this.btn.classList.contains(this.classActive);
    const outsideClick = new OutsideClick(
      this.menu,
      ["click", "touchstart"],
      () => {
        this.btn.classList.remove(this.classActive);
        this.menu.classList.remove(this.classActive);
        this.btn.ariaExpanded = false;
      }
    );
    outsideClick.init();
  }

  addEventMenu() {
    this.events.forEach((event) =>
      this.btn.addEventListener(event, this.openMenu)
    );
  }

  init() {
    if (this.btn && this.menu && this.events) {
      this.addEventMenu();
    }
  }
}
