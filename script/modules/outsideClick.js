export default class outsideClick {
  constructor(element, events, callback) {
    this.element = element;
    this.events = events;
    this.callback = callback;
    this.html = document.documentElement;
    this.outside = "data-outside";

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick({ target }) {
    if (!this.element.contains(target)) {
      this.element.removeAttribute(this.outside);
      this.events.forEach((userEvent) => {
        this.html.removeEventListener(userEvent, this.handleOutsideClick);
      });
      this.callback();
    }
  }

  init() {
    if (!this.element.hasAttribute(this.outside)) {
      this.events.forEach((userEvent) => {
        setTimeout(() =>
          this.html.addEventListener(userEvent, this.handleOutsideClick)
        );
      });
      this.element.setAttribute(this.outside, "");
    }
    return this;
  }
}
