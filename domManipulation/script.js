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

const holder = document.createElement("div");
holder.classList.add("content");
holder.setAttribute("style", "background-color: pink; border: 2px solid black;");

const heading1 = document.createElement("h1");
heading1.classList.add("heading");
heading1.textContent = "I'm in a div";

const parag = document.createElement("p");
parag.classList.add("paragraph");
parag.textContent = "ME TOO!";

holder.appendChild(heading1);
holder.appendChild(parag);

container.appendChild(holder);