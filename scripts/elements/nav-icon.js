const icon = document.getElementById('icon')
const nav = document.getElementById('nav')

icon.addEventListener('click', function(e) {
    this.classList.toggle('active')

    if(nav.classList.contains('active')) {
        nav.style.transform = "translateY(-800px)"
        nav.style.transition = "transform 0.2s ease"
        this.style.pointerEvents = "none"

        setTimeout(() => {
            this.style.pointerEvents = "auto"
            nav.classList.toggle('active')
        }, 200);
    } else {
        nav.style.transform = "translateY(0)"
        nav.style.transition = "transform 0.2s ease"
                
        nav.classList.toggle('active')   
    }
})
