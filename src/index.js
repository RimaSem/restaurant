import "./styles.css";
import createHeader from "./header";
import createHomePage from "./home";
import createFooter from "./footer";
import contact from "./contact";
import menu from "./menu";

const container = document.getElementById("content");
container.innerHTML = "";
homePage();

export function homePage() {
  container.innerHTML = "";
  container.append(createHeader(), createHomePage(), createFooter());
}

export function menuPage() {
  container.innerHTML = "";
  container.append(createHeader(), menu(), createFooter());
}

export function contactPage() {
  container.innerHTML = "";
  container.append(createHeader(), contact(), createFooter());
}
