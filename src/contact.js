import Img3 from "./img/nafinia-putra-unsplash.jpg";

export default function contact() {
  const contactSection = document.createElement("div");
  contactSection.className = "contact-section";

  const img = document.createElement("img");
  img.src = Img3;

  const h1 = document.createElement("h1");
  h1.textContent = "Contact";

  const contactText = document.createElement("div");
  contactText.className = "contact-text";

  const address = document.createElement("div");
  address.className = "address";
  const hours = document.createElement("div");
  hours.className = "hours";
  const contactUs = document.createElement("div");
  contactUs.className = "contact-us";

  address.innerHTML =
    "<p>Address</p><p>Imaginary Street 707</p><p>Cat City, CT</p><p>98156</p>";
  hours.innerHTML =
    "<p>Hours</p><p>Monday to Thursday: 10:00 - 21:00</p><p>Friday to Saturday: 11:00 - 22:00</p><p>Sunday: 12:00 - 21:00</p>";
  contactUs.innerHTML =
    "<p>Contact Us</p><p>Phone: (123) 456-7890</p><p>Email: blackcatcafe@catmail.com</p>";

  contactText.append(address, hours, contactUs);
  contactSection.append(img, h1, contactText);

  return contactSection;
}
