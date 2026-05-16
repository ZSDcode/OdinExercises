const container = document.querySelector("#container");
const para = document.createElement("p");
para.style["color"] = "red";
para.textContent = "Hey I'm Red!";
const head3 = document.createElement("h3");
head3.style["color"] = "blue";
head3.textContent = "I'm a blue h3!";
const innerDiv = document.createElement("div");
const head1 = document.createElement("h1");
head1.textContent = "I'm in a div";
const innerPara = document.createElement("p");
innerPara.textContent = "Me too!";
innerDiv.style["border"] = "2px solid black";

innerDiv.appendChild(innerPara);
innerDiv.appendChild(head1);
container.append(para);
container.append(head3);
container.append(innerDiv);
