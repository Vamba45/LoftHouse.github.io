window.addEventListener('resize', function() {
    if(this.window.innerWidth > 998) {
        const menuElements = document.querySelectorAll('.active')

        menuElements.forEach((item) => {
            item.classList.remove('active')
        })
    }
})