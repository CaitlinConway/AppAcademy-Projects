window.addEventListener("DOMContentLoaded", (event) => {
  let cartbutton = document.getElementById("add-to-cart");
  cartbutton.addEventListener('click', (e) => {
    let formvalue = document.getElementById("items").value;
    let quantityvalue = document.getElementById("quantity").value;
    localStorage.setItem(formvalue, quantityvalue);
  });


  const showCart = () => {
    let keyValue = [];
    for (let i = 0; i < localStorage.length; i++) {
      keyValue.push(localStorage.key(i));
      keyValue.push(":")
      keyValue.push(localStorage.getItem(localStorage.key(i)));
    }
    let cartDisplay = keyValue.join(" ");
    const cart = document.getElementById("shopping-cart");
    cart.innerHTML = cartDisplay;
  };
  showCart();

  // const storeItem = () => {

  // };

  const removeItem = () => {
    const removebutton = document.getElementById("remove-from-cart");
    removebutton.addEventListener('click', (e) => {
      let formvalue = document.getElementById("items").value;
      localStorage.removeItem(formvalue);
    })

  };
  removeItem()
});
