

const cartDom = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart__container")
const cartBtn = document.getElementById("cart-btn")
const closeCart = document.querySelector(".cart__close");
const cartBack = document.querySelector(".cart__background");

// media cart open
const myBag = document.getElementById("my-bag");
const sideNav = document.querySelector(".head__subnav");


let cartHandler = () => {
  cartDom.classList.toggle("overlay")
  let cartI = cartContainer.parentElement
  cartI.classList.toggle("show-content");
}

myBag.addEventListener("click", () => {
  sideNav.classList.remove("show");
  cartHandler()
})



cartBtn.addEventListener("click",cartHandler);
closeCart.addEventListener("click",cartHandler)
cartBack.addEventListener("click",cartHandler)
// CART CODE END

// cart item

const removeItem = document.querySelector(".remove-item");
const cartCount = document.querySelector(".cart-count");
const cartTotal = document.querySelector(".cart__total")
const cartContent = document.querySelector(".cart__content");


let cartBox = JSON.parse(localStorage.getItem("proddata")) || [];

let toCart = (id) => {
  //  let selectedItem = id
  let comfirm = cartBox.find((e) => e.id == id)
 
  if(comfirm === undefined ) {
    cartBox.push({
      id:id,
      item:1
    });
  }else {
    comfirm.item++;
  }
 
  cartHandler()
  CartCotent()
  upDateCart(id)
  localStorage.setItem("proddata", JSON.stringify(cartBox))
}

const totalAmount = () => {
  if(cartBox.length !== 0) {
   let amount = cartBox.map((e) => {
     let {item,id} = e
   let search = products.find((x) => x.id == id) || [];
   let totalEl =  item * search.price;
   return totalEl;
   }).reduce((x,y)=> x + y,0)
   
   cartTotal.innerHTML =`$${amount.toFixed(2)}`;
  }else  return

}

totalAmount()



const upDateCart = () => {
  const cartHeadCount = document.querySelector(".cart-count");
  let sum = cartBox.map((e) =>
   e.item).reduce((x,y) => x + y,0)
  cartHeadCount.innerHTML = sum;
  totalAmount()
}
upDateCart()

let CartCotent = () => {
  if(cartBox.length !== 0){
      return cartContent.innerHTML = cartBox.map((items) => {
         let {id,item} = items;
         let search = products.find((x) => x.id == id) || [];
        let totalEl =  item * search.price;
         return`
         <div class="cart-item">
        <div class="cart-img">
            <img src="${search.img}" alt="cart-product">
          </div>
          <div class="cart-item-desc">
            <h4>${search.desc}</h4>
            <h5>$ ${totalEl.toFixed(2)}</h5>
            <span class="remove-item" onClick="removecartItem(${id})">remove</span>
          </div>
           <div class="cart-count-arrow">
            <svg onClick="decrement(${id})">
              <use xlink:href="img/sprite.svg#icon-chevron-down"></use>
             </svg>
             <p class="item-amount"> ${item}</p>
             <svg onClick="increment(${id})">
              <use xlink:href="img/sprite.svg#icon-chevron-up"></use>
             </svg>
           </div>
        </div>
          `;
     }).join("");
      } else {
         cartContent.innerHTML = `
         <h2 class="cart_message">Cart Is Empty</h2>
        `
 }
}
 CartCotent()


 let increment = (id) => {
  //  let selectedItem = id
  let comfirm = cartBox.find((e) => e.id == id)
 
  if(comfirm === undefined ) {
    cartBox.push({
      id:id,
      item:1
    });
  }else {
    comfirm.item++;
  }
 
  CartCotent()
  upDateCart(id)
  localStorage.setItem("proddata", JSON.stringify(cartBox))
}
 
let decrement = (id) => {
  let comfirm = cartBox.find((e) => e.id === id)
  
  if(comfirm === undefined){
     return; 
  }else if (comfirm.item === 0){
     return
  } 
  else {
   comfirm.item--;
 }
 upDateCart(id)

 cartBox = cartBox.filter((x) => x.item !== 0)
 CartCotent()
 totalAmount()
 localStorage.setItem("proddata", JSON.stringify(cartBox))
}


 const removecartItem = (id) => {
   let selectedItem = id;
   cartBox = cartBox.filter((x) => x.id !== selectedItem)
   upDateCart()
   CartCotent()
   localStorage.setItem("proddata", JSON.stringify(cartBox))
 }


//  const totalAmount = () => {
//    if(cartBox.length !== 0) {
//     let amount = cartBox.map((e) => {
//       let {item,id} = e
//     let search = products.find((x) => x.id == id) || [];
//     let totalEl =  item * search.price;
//     return totalEl;
//     }).reduce((x,y)=> x + y,0)
    
//     cartTotal.innerHTML =`$${amount}`;
//    }else  return

//  }

//  totalAmount()

 