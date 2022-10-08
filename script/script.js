import FormCheck from "./modules/form.js";
import Horario from "./modules/horario.js";
import MenuMobile from "./modules/menuMobile.js";
import Accordion from "./modules/accordion.js";
import ScrollAnima from "./modules/anima-scroll.js";
import ActiveLink from "./modules/activeLink.js";

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

const accordion = new Accordion('[data-accordion="list"] dt');
accordion.init();
const accordionTramento = new Accordion('[data-accordion="tratamento"] dt');
accordionTramento.init();

const scrollAnima = new ScrollAnima("[data-anima]", "ativo");
scrollAnima.init();

const activeLink = new ActiveLink("[data-link] a", "active");
activeLink.init();
