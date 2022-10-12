export default class Copy {
  constructor(item, message, events) {
    this.itens = document.querySelectorAll(item);
    this.events = events || ["click", "touchstart"];
    this.message = message || "Valor Copiado!";

    this.copy = this.copy.bind(this);
    this.addEventItem = this.addEventItem.bind(this);
  }

  async copy(event) {
    event.preventDefault();
    const itemValor = event.target.innerText;

    try {
      await navigator.clipboard.writeText(itemValor);
      this.createPopup(this.message);
    } catch (error) {
      this.createPopup("Não foi possivel copiar!");
    }
  }

  createPopup(text) {
    // Verifica se um popup ja existe, se existir ele é removido
    if (this.popup) {
      this.popup.remove();
    }
    const popup = document.createElement("div");
    popup.classList.add("copy-popup", "font-1-xs");
    popup.innerHTML = text;
    document.body.appendChild(popup);

    this.popup = popup;

    // Remover o Popup 1.5segundos depois de adicionar
    setTimeout(() => {
      popup.remove();
    }, 1500);
  }

  // Adiciona evento de Copy em cada Item do array this.itens
  addEventItem(item) {
    this.events.forEach((event) => item.addEventListener(event, this.copy));
  }

  init() {
    if (this.itens.length) {
      this.itens.forEach(this.addEventItem);
    }
  }
}
