import Icon from "./img/icon.png";
import { homePage, contactPage } from "./index.js";

export default function createHeader() {
  const header = document.createElement("header");
  const icon = new Image();
  icon.src = Icon;

  const nav = document.createElement("div");
  nav.className = "nav";

  const tab1 = document.createElement("div");
  const tab2 = document.createElement("div");
  const tab3 = document.createElement("div");
  tab1.classList.add("tab1");
  tab2.classList.add("tab2");
  tab3.classList.add("tab3");
  tab1.textContent = "Home";
  tab2.textContent = "Menu";
  tab3.textContent = "Contact";

  nav.append(tab1, tab2, tab3);
  header.append(icon, nav);

  tab1.addEventListener("click", homePage);
  tab3.addEventListener("click", contactPage);

  return header;
}
