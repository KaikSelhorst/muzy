export default class ScrollAnima {
  constructor(sections, classActive) {
    this.sections = document.querySelectorAll(sections);
    this.classActive = classActive;
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relação
  // ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distância em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.classActive);
      }
    });
    this.stop();
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    const ultimo = this.distance.slice(-1)[0].element;
    if (ultimo.classList.contains(this.classActive)) {
      window.removeEventListener("scroll", this.checkDistance);
    }
  }
}
