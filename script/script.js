import MenuMobile from "./modules/menuMobile.js";

const menuMobile = new MenuMobile(
  "[data-menu='button'] ",
  "[data-menu='list']",
  "active"
);

menuMobile.init();
