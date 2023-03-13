
const productsContainerDom = document.querySelector(".products__product")
const categoriesContainer = document.querySelector(".categories-btn ul");


//  TOTAL NUMBER OF PRODUCTS DISPLAYED START
const productTotalDisplay = document.getElementById("product-total");
 const productsTotal = () => {
  let total = products.length;
  productTotalDisplay.innerHTML = total;
}
productsTotal()
//  TOTAL NUMBER OF PRODUCTS DISPLAYED END




const filterBtns = document.querySelectorAll(".category-item")

window.addEventListener("DOMContentLoaded", () => {
  displayCategoryBtn()
  GenderFilter();
})

displayProducts(products);




// DISPLAY CATEGORY BUTTONS END

 function displayProducts (items) {
  let display = items.map( function (item) {
    let {id,img,desc,karat,gender,colors,made,price} = item;
    // let search = cartBox.find((x) => x.id == id) || [];
    return `
    <article class="products__product--item">
    <figure class="products__product--img">
    <img src="${img}" alt="${desc}">
    </figure>
    <div class="products__product--info">
    <h3>${desc} <span> ${karat}</span></h3>
    <span class="products__product--sex">
    ${colors} / ${gender}
    </span>
          <h5>${made}</h5>
          <h2 class="products__product--price">
              $${price}
          </h2>
         </div>
         <figcaption class="products__product--overlay">
              <button>
                <svg>
                 <use xlink:href="img/sprite.svg#icon-search1"></use>
                 </svg>
                </button>
              <button class="to-cart-btn" onClick="toCart(${id})">
                <svg>
                 <use xlink:href="img/sprite.svg#icon-shopping-bag"></use>
                </svg>
                </button>
            </figcaption>
     </article>
      `
  })
  display = display.join("");
  productsContainerDom.innerHTML = display;

  // let CartBtn = document.querySelectorAll('.to-cart-btn');
  
}





 

 






