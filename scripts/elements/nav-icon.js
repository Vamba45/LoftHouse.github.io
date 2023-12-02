const navIcon = document.getElementById('icon')
const nav = document.getElementById('nav')

navIcon.addEventListener('click', function(e) {
    this.classList.toggle('active')
    nav.classList.toggle('active')
    document.body.classList.toggle('active')
})