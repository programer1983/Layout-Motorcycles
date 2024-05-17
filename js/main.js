
const burgerButton = document.querySelector(".header__burger")
const navList = document.querySelector(".header__menu")
const html = document.querySelector("html")

burgerButton.addEventListener("click", open)

function open(){
  navList.classList.toggle("active-menu")
  burgerButton.classList.toggle('active')
  html.classList.toggle("unscroll")
}

/* ======================================================================================= */

const anchors = document.querySelectorAll('[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault()

        const blockID = anchor.getAttribute("href").substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})

/* ======================================================================================= */

navList.querySelectorAll(".header__menu-linck").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("active-menu")
  })
})

/* ====================================================================================  */

const instagram = document.querySelector(".instagram__items")

  Array.from(instagram.children).forEach(item => {
    const dublicateNode = item.cloneNode(true)
    dublicateNode.setAttribute("aria-hidden", true)
    instagram.appendChild(dublicateNode)
  })


/* ======================================================================================  */

const scrollRevealOptins = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal(".header__body-subtitle", {
  ...scrollRevealOptins,
})

ScrollReveal().reveal(".header__body-title", {
  ...scrollRevealOptins,
  delay: 500,
})

ScrollReveal().reveal(".header__body-button", {
  ...scrollRevealOptins,
  delay: 1000,
})


ScrollReveal().reveal(".about__top", {
  ...scrollRevealOptins,
  delay: 500,
})
ScrollReveal().reveal(".about__text", {
  ...scrollRevealOptins,
  delay: 1000,
})


ScrollReveal().reveal(".blog__item", {
  ...scrollRevealOptins,
  interval: 500,
})

/* =======================================================================================  */

const animItems = document.querySelectorAll('.service__logo')

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}