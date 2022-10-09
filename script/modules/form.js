export default class FormCheck {
  constructor(email, btn, correct, incorrect) {
    this.email = document.querySelector(email);
    this.btn = document.querySelector(btn);
    this.correct = correct;
    this.incorrect = incorrect;

    this.checkEmail = this.checkEmail.bind(this);
  }

  submitBtn() {
    if (!this.email.classList.contains(this.correct)) {
      this.btn.setAttribute("disabled", "");
    } else {
      this.btn.removeAttribute("disabled");
    }
  }

  checkEmail({ target }) {
    if (target.value.match(/[\w.-]+@[\w-]+\.[\w-.]+/gi)) {
      target.classList.remove(this.incorrect);
      target.classList.add(this.correct);
    } else {
      target.classList.remove(this.correct);
      target.classList.add(this.incorrect);
    }
    this.submitBtn();
  }

  addEventEmail() {
    this.email.addEventListener("change", this.checkEmail);
  }

  init() {
    if (this.email) {
      this.addEventEmail();
      this.submitBtn();
    }
    return this;
  }
}
