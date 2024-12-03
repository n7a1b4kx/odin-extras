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
para.setAttribute("style", "color: red; text-align: center;");

container.appendChild(para);

const heading3 = document.createElement("h3");
heading3.classList.add("heading");
heading3.textContent = "I'm blue h3";
heading3.setAttribute("style", "color: blue; text-align: center;");

container.appendChild(heading3);

