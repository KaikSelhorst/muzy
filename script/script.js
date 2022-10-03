import FormCheck from "./modules/form.js";
import Horario from "./modules/horario.js";
import MenuMobile from "./modules/menuMobile.js";
import Accordion from "./modules/accordion.js";

const menuMobile = new MenuMobile(
  "[data-menu='button'] ",
  "[data-menu='list']",
  "active"
);
menuMobile.init();

const formulario = new FormCheck("[data-form='email']", "correto", "incorreto");
formulario.init();

const horario = new Horario(".contato-horario", "aberto");
horario.init();

const accordion = new Accordion('[data-accordion="list"] dt', "active");
accordion.init();
