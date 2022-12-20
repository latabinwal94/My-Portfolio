const pBtns = document.querySelector('.p-btns')
const pBtn = document.querySelectorAll('.p-btn')
const img_overlay_elm = document.querySelectorAll('.img-overlay')
pBtns.addEventListener('click', (e) => {
  const pBtnClicked = e.target;
  if(!pBtnClicked.classList.contains('p-btn')) return
  pBtn.forEach((elem) => elem.classList.remove('p-btns-active'))
  pBtnClicked.classList.add('p-btns-active')
  const btnNum = pBtnClicked.dataset.btnNum
  const imgActive = document.querySelectorAll(`.p-btn--${btnNum}`)
  img_overlay_elm.forEach((currElem) => currElem.classList.add('p-image-not-active'))
  imgActive.forEach((currElem) => currElem.classList.remove('p-image-not-active'))
})

// swiper js code

new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperFunc = (e) => {
  if(e.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1
    });
  } else {
      new Swiper(".mySwiper", {
        slidesPerView: 2
      });
  }
}

const widthSize = window.matchMedia("(max-width: 767px)")
swiperFunc(widthSize)
widthSize.addEventListener('change', swiperFunc)

// scroll bottom to top button
const heroElem = document.querySelector('.section-hero')
const footerElem = document.querySelector('.section-footer')
const scrollElem = document.createElement('div')
scrollElem.classList.add('scroll-top-style')
scrollElem.innerHTML = `<ion-icon name='arrow-up-outline' class='scroll-top'></icon>`
footerElem.after(scrollElem)
scrollElem.addEventListener('click', () => {
  heroElem.scrollIntoView({behavior: 'smooth'})
})

// header links scrolling to there section

const aboutLink = document.querySelector('.about-link')
const aboutPage = document.querySelector('.section-portfolio')
aboutLink.addEventListener('click', () => {
  aboutPage.scrollIntoView({ behavior: 'smooth'})
})


// counter numbers

const counterNum = document.querySelectorAll('.counter-numbers')
const workSection = document.querySelector('.section-work-data')
const speed = 20
const workObserver = new IntersectionObserver((entries, observer) => {
  const ent = entries[0]
  if(!ent.isIntersecting) return
  if(ent.isIntersecting) {
    counterNum.forEach((elem) => {
      const updateNumber = () => {
        const targetNum = elem.dataset.number
        initialNum = parseInt(elem.innerText)
        const incrementNum = Math.trunc(targetNum/speed)
        if(initialNum < targetNum) {
          elem.innerText = `${initialNum + incrementNum}+`
          setTimeout(updateNumber, 10)
        }
      }
      updateNumber()
    })
  }
  observer.unobserve(workSection)

},{root: null, threshold: 0})

workObserver.observe(workSection)

// responsive menu bar

const mobileNavBtn = document.querySelector('.mobile-navbar-btn')
const header = document.querySelector('.header')
mobileNavBtn.addEventListener('click', () => {
  header.classList.toggle('active')
})

// sticky navbar

const observer = new IntersectionObserver((entries)=>{
  const ent = entries[0]
  !ent.isIntersecting ? document.body.classList.add('sticky') : document.body.classList.remove('sticky')
}, {root: null, threshold: 0})

observer.observe(heroElem)


//progress bar animation
const progreddBarSection = document.querySelector('.section-biodata')
const progressBarObserver = new IntersectionObserver((entries)=> {
  const ent = entries[0]
  if(ent.isIntersecting) {
    progreddBarSection.classList.add('animate')
  }
}, {root: null, threshold: 0})

progressBarObserver.observe(progreddBarSection)
