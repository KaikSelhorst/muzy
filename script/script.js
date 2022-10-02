import FormCheck from "./modules/form.js";
import MenuMobile from "./modules/menuMobile.js";

const menuMobile = new MenuMobile(
  "[data-menu='button'] ",
  "[data-menu='list']",
  "active"
);

menuMobile.init();

const formulario = new FormCheck("[data-form='email']", "correto", "incorreto");

formulario.init();
