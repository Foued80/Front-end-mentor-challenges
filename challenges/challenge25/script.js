let menu_icon = document.getElementById("menu_icon");
let close_icon = document.getElementById("close_icon");
let cart_icon = document.getElementById("cart_icon");
let cart = document.getElementById("cart");
let product1 = document.getElementById("product1");
let product2 = document.getElementById("product2");
let product3 = document.getElementById("product3");
let product4 = document.getElementById("product4");
let lb_product1 = document.getElementById("lb_product1");
let lb_product2 = document.getElementById("lb_product2");
let lb_product3 = document.getElementById("lb_product3");
let lb_product4 = document.getElementById("lb_product4");
let cartEmpty = document.getElementById("cart_empty");
let cartItem = document.getElementById("cart_item");
let cartBadge = document.getElementById("cart_badge");
let cartDeleteIcon = document.getElementById("cart_deleteIcon");
let lightboxClose = document.getElementById("lightbox_close");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let cartTotalPrice = document.getElementById("cart_totalPrice");
let cartPrice = document.getElementById("cart_price");
let addToCart = document.getElementById("addToCart");
let product_amount = document.getElementById("product_amount");
let product_view_next = document.getElementById("product_view_next");
let product_view_previous = document.getElementById("product_view_previous");
let product_image = document.getElementById("product_view_image");
let lb_product_view_next = document.getElementById("lb_product_view_next");
let lb_product_view_previous = document.getElementById(
  "lb_product_view_previous"
);
let lb_product_image = document.getElementById("lb_product_view_image");

let image_index = 0;
let quantity = 0;
let image_array = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

let nav_bar = document.getElementsByTagName("nav");

plus.addEventListener("click", () => {
  product_amount.innerText++;
  quantity++;
});
minus.addEventListener("click", () => {
  if (quantity < 1) {
    product_amount.innerText = 0;
    quantity = 0;
  } else {
    product_amount.innerText--;
    quantity--;
  }
});

product_view_next.addEventListener("click", () => {
  image_index++;
  if (image_index > 3) {
    image_index = 0;
  }
  product_image.src = image_array[image_index];
});

product_view_previous.addEventListener("click", () => {
  image_index--;
  if (image_index < 0) image_index = 3;
  product_image.src = image_array[image_index];
});
lb_product_view_next.addEventListener("click", () => {
  image_index++;
  if (image_index > 3) image_index = 0;
  lb_product_image.src = image_array[image_index];
});

lb_product_view_previous.addEventListener("click", () => {
  image_index--;
  if (image_index < 0) image_index = 3;
  lb_product_image.src = image_array[image_index];
});

menu_icon.addEventListener("click", () => {
  nav_bar[0].classList.toggle("nav_toggle");
});

close_icon.addEventListener("click", () => {
  nav_bar[0].classList.toggle("nav_toggle");
});

cart_icon.addEventListener("click", () => {
  if (cart.style.display === "none" || cart.style.display === "") {
    if (localStorage.getItem("quantity") > 0) {
      cartEmpty.classList.add("hide");
      cartItem.classList.remove("hide");
      cartPrice.innerText = `$ 125.00 x  ${localStorage.getItem("quantity")}`;
      cartTotalPrice.innerText = "$ " + 125 * localStorage.getItem("quantity");
    } else {
      cartEmpty.classList.remove("hide");
      cartItem.classList.add("hide");
    }
    cart.style.display = "flex";
  } else {
    cart.style.display = "none";
  }
});

product1.addEventListener("click", () => {
  setActive(product1);
  product_image.style.opacity = 0.5;
  setTimeout(() => {
    product_image.src = "images/image-product-1.jpg";
    product_image.style.opacity = 1;
  }, 300);
});
product2.addEventListener("click", () => {
  setActive(product2);
  product_image.style.opacity = 0;
  setTimeout(() => {
    product_image.src = "images/image-product-2.jpg";
    product_image.style.opacity = 1;
  }, 300);

  setTimeout(() => {
    product_image.style.opacity = 1;
  }, 300);
});
product3.addEventListener("click", () => {
  setActive(product3);
  product_image.style.opacity = 0;
  setTimeout(() => {
    product_image.src = "images/image-product-3.jpg";
    product_image.style.opacity = 1;
  }, 300);
});

product4.addEventListener("click", () => {
  setActive(product4);
  product_image.style.opacity = 0;
  setTimeout(() => {
    product_image.src = "images/image-product-4.jpg";
    product_image.style.opacity = 1;
  }, 300);
});

lb_product1.addEventListener("click", () => {
  setActive(lb_product1);
  lb_product_image.style.opacity = 0.5;
  setTimeout(() => {
    lb_product_image.src = "images/image-product-1.jpg";
    lb_product_image.style.opacity = 1;
  }, 300);
});
lb_product2.addEventListener("click", () => {
  setActive(lb_product2);
  lb_product_image.style.opacity = 0;
  setTimeout(() => {
    lb_product_image.src = "images/image-product-2.jpg";
    lb_product_image.style.opacity = 1;
  }, 300);

  setTimeout(() => {
    lb_product_image.style.opacity = 1;
  }, 300);
});
lb_product3.addEventListener("click", () => {
  setActive(lb_product3);
  lb_product_image.style.opacity = 0;
  setTimeout(() => {
    lb_product_image.src = "images/image-product-3.jpg";
    lb_product_image.style.opacity = 1;
  }, 300);
});

lb_product4.addEventListener("click", () => {
  setActive(lb_product4);
  lb_product_image.style.opacity = 0;
  setTimeout(() => {
    lb_product_image.src = "images/image-product-4.jpg";
    lb_product_image.style.opacity = 1;
  }, 300);
});

lightboxClose.addEventListener("click", () => {
  document.getElementsByClassName("lightbox")[0].style.display = "none";
});
product_image.addEventListener("click", () => {
  document.getElementsByClassName("lightbox")[0].style.display = "flex";
});

function setActive(target) {
  let allElements = Array.from(document.querySelectorAll(".active"));
  for (let element of allElements) {
    element.classList.remove("active");
  }
  target.classList.add("active");
}
addToCart.addEventListener("click", () => {
  if (quantity > 0) {
    cart.style.display = "none";
    localStorage.setItem(
      "quantity",
      parseInt(localStorage.getItem("quantity")) + quantity
    );
    cartBadge.innerText = localStorage.getItem("quantity");
  }
});
cartDeleteIcon.addEventListener("click", () => {
  localStorage.setItem("quantity", 0);
  cartBadge.innerText = "";
  cartEmpty.classList.remove("hide");
  cartItem.classList.add("hide");
});

quantity === null
  ? localStorage.setItem("quantity", "0")
  : localStorage.getItem("quantity");

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("quantity") === null) {
    localStorage.setItem("quantity", 0);
  } else if (localStorage.getItem("quantity") > 0) {
    cartBadge.innerText = localStorage.getItem("quantity");
  }
});
