window.addEventListener("DOMContentLoaded", event => {
  let name = document.createElement("h1");
  name.setAttribute("id", "name");
  let nameText = document.createTextNode("Caitlin");
  name.appendChild(nameText);
  document.body.appendChild(name);

  const list = document.createElement("ul");
  list.setAttribute("id", "details");
  document.body.appendChild(list);

  const detailsArr = [
    "<li>I like coffee</li>",
    "<li>I like cats</li>",
    "<li>I like beer</li>",
    "<li>I like food</li>"
  ];
  const liString = detailsArr.join(" ");
  const listElement = document.getElementById("details");
  listElement.innerHTML = liString;

  const myDetails = document.createElement("ul");
  myDetails.setAttribute("class", "my-details");
  name.setAttribute("class", "name");
  const listEle = document.querySelectorAll("li");
  listEle.forEach(ele => {
    ele.setAttribute("class", "detail");
  });
  const clockItem = document.createElement("li");
  listElement.appendChild(clockItem);
  clockItem.setAttribute("class", "detail");
  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockItem.innerHTML = "I live in Madison, Wisconsin, and it's currently " + hours + ":" + minutes + ":" + seconds;
  };
  setInterval(time, 1000);
});
