function menu(){
    $('.menu-container').fadeToggle()
        let headerInner = document.querySelector("#header-inner");
        headerInner.classList.toggle('bottom-toggle');
        headerInner.style.transition = '0.5s all';
}