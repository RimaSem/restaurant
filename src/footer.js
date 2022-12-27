export default function createFooter() {
  const footer = document.createElement("footer");
  const footerH3 = document.createElement("h3");
  const footerDiv = document.createElement("div");

  footerDiv.className = "references";

  const para1 = document.createElement("p");
  const para2 = document.createElement("p");

  const link1 = document.createElement("a");
  link1.href = "https://unsplash.com/@rebaspike";
  link1.target = "_blank";
  link1.textContent = "Reba Spike";

  const link2 = document.createElement("a");
  link2.href = "https://unsplash.com/";
  link2.target = "_blank";
  link2.textContent = "Unsplash";

  const link3 = document.createElement("a");
  link3.href = "https://www.flaticon.com/";
  link3.target = "_blank";
  link3.textContent = "Freepik - Flaticon";

  para1.innerHTML = "Photo by ";
  para1.appendChild(link1);
  para1.innerHTML += " on ";
  para1.appendChild(link2);
  para1.innerHTML += " &nbsp; |";

  para2.innerHTML = "Cat icon created by ";
  para2.appendChild(link3);

  footerDiv.appendChild(para1);
  footerDiv.appendChild(para2);

  footer.appendChild(footerH3);
  footer.appendChild(footerDiv);

  return footer;
}
