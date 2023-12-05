const NAV_ICON = document.getElementById('icon')
const NAV = document.getElementById('nav')

function toggleClass(elements, className) {
    elements.forEach(el => el.classList.toggle(className))
};

NAV_ICON.addEventListener('click', function(e) {
    toggleClass([this, NAV, document.body], 'active')
})