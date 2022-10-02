export default class FormCheck {
  constructor(email, correct, incorrect) {
    this.email = document.querySelector(email);
    this.correct = correct;
    this.incorrect = incorrect;

    this.checkEmail = this.checkEmail.bind(this);
  }

  checkEmail({ target }) {
    if (target.value.match(/[\w.-]+@[\w-]+\.[\w-.]+/gi)) {
      target.classList.remove(this.incorrect);
      target.classList.add(this.correct);
    } else {
      target.classList.remove(this.correct);
      target.classList.add(this.incorrect);
    }
  }

  addEventEmail() {
    this.email.addEventListener("change", this.checkEmail);
  }

  init() {
    if (this.email) {
      this.addEventEmail();
    }
    return this;
  }
}
