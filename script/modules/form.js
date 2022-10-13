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

  addSpan() {
    const span = document.createElement("span");
    span.innerHTML = "Endereço de email incorreto";
    span.classList.add("font-2-s", "cor-red");
    this.span = span;

    const elementoAnterior = this.email.nextElementSibling;
    this.email.parentNode.insertBefore(this.span, elementoAnterior);
  }

  checkEmail({ target }) {
    // Remove o span Caso Exista
    if (this.span) {
      this.span.remove();
    }
    // Verifica se o email está correto
    if (target.value.match(/[\w.-]+@[\w-]+\.[\w-.]+/gi)) {
      target.classList.remove(this.incorrect);
      target.classList.add(this.correct);
    } else {
      // Adiciona o span para indicar se o email está incorreto
      this.addSpan();
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
