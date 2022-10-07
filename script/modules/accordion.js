export default class Accordion {
  constructor(list, classActive) {
    this.list = document.querySelectorAll(list);
    this.classActive = classActive || "active";
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
      this.toggleAccordion(this.list[0]);
      this.addEventAccordion();
    }
    return this;
  }
}
