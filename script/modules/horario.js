export default class Horario {
  constructor(item, activeClass) {
    this.item = document.querySelector(item);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.item.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.item.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.item.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.item) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
