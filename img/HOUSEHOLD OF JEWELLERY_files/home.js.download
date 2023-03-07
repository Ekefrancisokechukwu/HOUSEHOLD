
const searchInput = document.querySelector(".head__search");
const search = document.getElementById("search");

search.addEventListener("click", () => {
  const Input = document.querySelector(".search-input");
  searchInput.classList.toggle("show-search")
  
  // Input.value = "";
})


// header media toggle 
const subNavHandler = () => {
  const sibeNavBtn = document.querySelector(".header__toggle");
  const sideNav = document.querySelector(".head__subnav");
  const close = sideNav.querySelector(".head__subnav--close");

  sibeNavBtn.addEventListener("click",() => {
    sideNav.classList.toggle("show");
  })

  close.addEventListener("click", () => {
    sideNav.classList.remove("show");
  })
}
subNavHandler()


// POPUP SECTION
const popup = document.querySelector(".popup")
const  accountBtn = document.getElementById("account");
const  closePopupBtn = document.querySelector(".popup__close");
const popupContainer = document.querySelector(".popup__container");

// console.log(popupForm);
accountBtn.addEventListener("click", () => {
  const popupForm = popupContainer.parentElement;

  popupForm.classList.toggle("show-popup")
})

closePopupBtn.addEventListener("click", () => {
  popup.classList.toggle("show-popup")
})

// POPUP FORM SECTION///

const formLogin = document.querySelector(".form")
const formSignin = document.querySelector(".form__register")
const formBtn = document.getElementById("reg-btn");





formBtn.addEventListener("click", () => {
  for(let e of formLogin) {
    if(e.lenght == undefined) {
      formLogin.style.display = "none"
      formSignin.style.display ="block"
    }else {
      console.log("help")
    }
  }
})

// SIDEBAR TOGGLE START //////
const sidebarShowBtn = document.querySelector(".header__toggle");
const sidebar = document.querySelector(".head__subnav");
const sidenavCloseBtn = document.querySelector(".head__subnav--close");

const sidebarHandler = () => {
  sidebar.classList.toggle("show-sidebar");
}
sidebarShowBtn.addEventListener("click",sidebarHandler)
sidenavCloseBtn.addEventListener("click",sidebarHandler)

// SIDEBAR TOGGLE END


// HEADER SCROLL START///

const header = document.querySelector(".head");
const topBtn = document.querySelector(".top-btn");

let prevscroll = window.pageYOffset;


window.addEventListener("scroll", () => {
let headerHeight = header.getBoundingClientRect().height;
let currentHeight = window.pageYOffset;

     if(currentHeight >  headerHeight) {
       header.classList.add("isfixed")
      }else {
      header.classList.remove("isfixed")
     }
    // currentHeight = prevscroll;

    if(currentHeight > 1500) {
    
      topBtn.classList.add("show-top-btn")
    }else {
      topBtn.classList.remove("show-top-btn")
    }
})

// HEADER SCROLL END////



// ***THE Q AND A SECTION START **
const questions = document.querySelectorAll(".footer__qa-section--title");



for(let i = 0; i < questions.length; i++ ) {
  questions[i].addEventListener("click", function () {
    this.classList.toggle("show-text")
     let content = this.nextElementSibling;
    //  console.log(content)
     if(content.style.maxHeight) {
      content.style.maxHeight = null;
     }else {
      content.style.maxHeight = content.scrollHeight + "px";
     }
  })
}




// questions.forEach((question) => {

//   btn.addEventListener("click", () => {
    
//     questions.forEach((item) => {
//       if(item !== question) {
//         item.classList.remove("show-text")
//       }
//       // let content = item.lastElementChild
//         // content
//       })
//       var content = question.nextElementSibling
//       console.log(content)
   
   
//    question.classList.toggle("show-text")
   
//  })
// })
  

// ***THE Q AND A SECTION END **







// FOOTER YEAR START
const footerDate = document.querySelector(".footer_year");

footerDate.innerHTML = new Date().getFullYear();
// FOOTER YEAR END