import "./styles.css";
import createHeader from "./header";
import createHomePage from "./home";
import createFooter from "./footer";

const container = document.getElementById("content");

container.appendChild(createHeader());
container.appendChild(createHomePage());
container.appendChild(createFooter());
