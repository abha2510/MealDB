import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let data = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart_count").innerHTML = data.length;
let appendData = (data) => {
  let box = document.getElementById("items");
  box.innerHTML = null;

  data.forEach((el, id) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let image = document.createElement("img");
    image.src = el.image;
    let title = document.createElement("h3");
    title.innerHTML = el.name;
    let price = document.createElement("h3");
    price.innerHTML = el.price;
    let btn = document.createElement("button");
    btn.setAttribute("class", "remove");
    btn.innerText = "Remove";
    btn.onclick = () => {
      remove(id);
      window.location.reload(true);
    };

    div.append(image,  title,  price, btn);
    box.append(div);
  });
};
appendData(data);

let remove = (id) => {
  let data = JSON.parse(localStorage.getItem("cart")) || [];
  data.splice(id, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  appendData(data);
};