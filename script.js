const navbarEl = document.querySelector(".navbar"),
      bottomContainerEl = document.querySelector(".bottom-container"),
      logoEl = document.querySelector("#logo"),
      searchFielEl = document.querySelector(".search-field"),
      scrollTop = document.querySelector(".scroll-to-top")

      setPage()

window.addEventListener("scroll", ()=>{
    if(window.scrollY > (bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50)){
        
        navbarEl.classList.add("active")
        searchFielEl.classList.add("active")
        logoEl.setAttribute('src', 'imgs/logoWhite.svg')
        scrollTop.classList.add("active")
    
    }else{
        navbarEl.classList.remove("active")
        searchFielEl.classList.remove("active")
        logoEl.setAttribute('src', 'imgs/logoGreen.svg')
        scrollTop.classList.remove("active")
    }

    scrollTop.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo(0,0)
    })



})

 function setPage( ) {
    navbarEl.classList.remove("active")
    searchFielEl.classList.remove("active")
    logoEl.setAttribute('src', 'imgs/logoGreen.svg')
 }