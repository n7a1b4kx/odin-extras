// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// building dom with js

const para = document.createElement("p");
para.classList.add("paragraph");
para.textContent = "Hey I'm red!";
para.setAttribute("style", "color: red; font-size: 24px; text-align: center;");

container.appendChild(para);
