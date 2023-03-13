

const category = document.querySelectorAll(".products__sorts--item");


const sortProductHandler = () => {
for(let i = 0; i < category.length; i++) {
  category[i].addEventListener("click",function () {
    this.classList.toggle("show")
    let p = this.nextElementSibling;
    // console.log(p)
        if(p.style.maxHeight) {
          p.style.maxHeight = null;
        }else {
          p.style.maxHeight = p.scrollHeight  + "px"
        }
    })
  }
}

sortProductHandler();
//  let g = categoriesItems.getBoundingClientRect()
 



// DISPLAY CATEGORY BUTTONS START
const displayCategoryBtn = () => {
  const categories = products.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, ["all"]);
  const categoryBtns = categories.map((cateogry) => {

    return `
    <li class="category-item" data-category="${cateogry}">
    <input name="product" type="radio" class="checkbox" id="${cateogry}">
    <label for="${cateogry}">
    <span></span>${cateogry}
    </label>
    </li>
    `
  }).join("")
  categoriesContainer.innerHTML = categoryBtns;
  const filterBtns = categoriesContainer.querySelectorAll(".category-item")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.category;
      const productCategory = products.filter((productItem) => {
        
        if (productItem.category === category) {
          
          return productItem;
        }
      })
      if (category === 'all') {
        displayProducts(products)
        
      } else {
        displayProducts(productCategory)
      }
    })
  });
}


// / FILTERING THEOUGH THE PRODUCT SEARCH.////

const searchBtn = document.getElementById("search")
const message = document.querySelector(".head__message");
const searchHandler = () => {
  const productSearch = document.querySelector(".search-input");
 let  inputValues = productSearch.value
    if(inputValues.trim() === '') {
      return
    }

        let prod = products.filter((prodName) => {
          let prodEl = prodName.name; 
          if(prodEl.includes(inputValues)) {
            return prodName;
          }else {
            // 
          }
          // (prodEl.includes(inputValues))? prodName: message.classList.toggle('visible')
        
        })
        if(inputValues) {
          displayProducts(prod)
        }
        
  }
  searchBtn.addEventListener("click", searchHandler);
  // / FILTERING THEOUGH THE PRODUCT SEARCH END.////



  
const GenderFilter = () => {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click",(e) => {
      let genders = e.currentTarget.dataset.gender;

       let  productGender = products.filter((prodGender) => {
        if (prodGender.gender === genders) {
          return prodGender;
        }
       })
       if (genders) {
        displayProducts(productGender)
        // displayProducts(products)
      }
    })
  })
}



