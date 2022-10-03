export default class Accordion {
  constructor(list, classActive) {
    this.list = document.querySelectorAll(list);
    this.classActive = classActive;
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classActive);
  }

  addEventAccordion() {
    this.list.forEach((item) =>
      item.addEventListener("click", () => this.toggleAccordion(item))
    );
  }

  init() {
    if (this.list.length) {
      this.addEventAccordion();
    }
    return this;
  }
}
