window.addEventListener('resize', function() {
    if(this.window.innerWidth > 998) {
        const menuElements = document.querySelectorAll('.active')

        menuElements.forEach((item) => {
            item.classList.remove('active')
        })
    }
})

function getParents(elem) {
    var parents = [];
    while(elem.parentNode && elem.parentNode.nodeName.toLowerCase() != 'body') {
      elem = elem.parentNode;
      parents.push(elem);
    }
    return parents;
}

const navIcon = document.getElementById('icon')
const nav = document.getElementById('nav')

function toggleClass(elements, className) {
    elements.forEach(el => el.classList.toggle(className))
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if(getParents(anchor).includes(NAV)) {
            toggleClass([nav, navIcon, document.body], 'active')
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});