import Icon from "./img/icon.png";

export default function createHeader() {
  const header = document.createElement("header");
  // const icon = document.createElement("img");
  const icon = new Image();
  icon.src = Icon;

  const nav = document.createElement("div");
  nav.className = "nav";

  const tab1 = document.createElement("div");
  const tab2 = document.createElement("div");
  const tab3 = document.createElement("div");
  tab1.className = "tab1";
  tab2.className = "tab2";
  tab3.className = "tab3";

  nav.appendChild(tab1);
  nav.appendChild(tab2);
  nav.appendChild(tab3);

  header.appendChild(icon);
  header.appendChild(nav);

  const tabs = ["Home", "Menu", "Contact"];
  tabs.forEach((item) => {
    const tabDiv = document.createElement("div");
    const tab = document.createElement("p");
    tab.classList.add("tab");
    tab.textContent = item;
    // button.addEventListener("click", switchPages);
    tabDiv.appendChild(tab);
    nav.appendChild(tabDiv);
  });

  return header;
}
