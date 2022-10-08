export default class ActiveLink {
  constructor(links, classActive) {
    this.links = document.querySelectorAll(links);
    this.classActive = classActive || "active";
    this.documentURL = document.location.href;
    this.isActive = this.isActive.bind(this);
  }

  isActive(link) {
    const linkURL = link.href;
    if (this.documentURL === linkURL) link.classList.add(this.classActive);
  }

  init() {
    if (this.links.length) {
      this.links.forEach((link) => this.isActive(link));
    }
  }
}
