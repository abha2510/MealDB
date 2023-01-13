

let card = (image, name,price) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart_count").innerText = cart.length;
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = image;
    let h2=document.createElement("h2");
    h2.innerText=name
    let h3 = document.createElement("h3");
    h3.innerText = price;
    let btn = document.createElement("button");
    btn.setAttribute("class", "add_to_cart");
    btn.innerText = "Add to Cart";
    btn.onclick = () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({image, name,price});
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload(true);
    };
    div.append(img,h2, h3,btn);
    return div;
  };
  export default card;