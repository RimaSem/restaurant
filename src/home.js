import Img from "./img/reba-spike-unsplash.jpg";

export default function createHomePage() {
  const main = document.createElement("main");

  const div1 = document.createElement("div");
  div1.className = "main-img";
  const div2 = document.createElement("div");
  div2.className = "about";

  const h1 = document.createElement("h1");
  h1.textContent = "Black Cat Cafe";
  const img = document.createElement("img");
  img.src = Img;
  img.alt = "black cat on table standing next to two iced coffee cups";

  div1.appendChild(h1);
  div1.appendChild(img);

  const h2 = document.createElement("h2");
  h2.textContent = "About";
  const para = document.createElement("p");
  para.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea modi cum nulla provident consectetur veniam exercitationem culpa ipsum voluptas, quia dolorum minus odit architecto? Exercitationem, atnt repudiandae molestiae maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam voluptatum nesciunt doloremque illum sint vel tenetur fugit quae consectetur explicabo illo.";

  div2.appendChild(h2);
  div2.appendChild(para);

  main.appendChild(div1);
  main.appendChild(div2);

  return main;
}
