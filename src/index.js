import "./styles.css";
import createHeader from "./header";
import createHomePage from "./home";
import createFooter from "./footer";
import contact from "./contact";

const container = document.getElementById("content");
container.innerHTML = "";
homePage();

export function homePage() {
  container.innerHTML = "";
  container.appendChild(createHeader());
  container.appendChild(createHomePage());
  container.appendChild(createFooter());
}

export function contactPage() {
  container.innerHTML = "";
  container.appendChild(createHeader());
  container.appendChild(contact());
  container.appendChild(createFooter());
}
