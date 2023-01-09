const navbarEl = document.querySelector(".navbar"),
      bottomContainerEl = document.querySelector(".bottom-container"),
      logoEl = document.querySelector("#logo"),
      searchFielEl = document.querySelector(".search-field")

      setPage()

window.addEventListener("scroll", ()=>{
    if(window.scrollY > (bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50)){
        
        navbarEl.classList.add("active")
        searchFielEl.classList.add("active")
        logoEl.setAttribute('src', 'imgs/logoWhite.svg')
    
    }else{
        navbarEl.classList.remove("active")
        searchFielEl.classList.remove("active")
        logoEl.setAttribute('src', 'imgs/logoGreen.svg')

    }


})
 function setPage( ) {
    navbarEl.classList.remove("active")
    searchFielEl.classList.remove("active")
    logoEl.setAttribute('src', 'imgs/logoGreen.svg')
 }