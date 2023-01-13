import card from "./card.js"
let append = (cont, prod_data) => {
    cont.innerHTML = null;
    prod_data.forEach(({ image,name, price }) => {
      let p = card(image,name, price);
      cont.append(p);
    });
  };
  export default append;