window.addEventListener('resize', function() {
    if(this.window.innerWidth > 998) {
        const menuElements = document.querySelectorAll('.active')

        menuElements.forEach((item) => {
            item.classList.remove('active')
        })
    }
})

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header__top-row')
    const upBtn = document.querySelector('#up')

    if(scrollY > 50) {
        header.classList.add('scrolling')
        upBtn.classList.add('scrolling')
    } else if(scrollY < 50) {

        if(header.classList.contains('scrolling')) {
            header.classList.remove('scrolling')
        }
        
        if(upBtn.classList.contains('scrolling')) {
            upBtn.classList.remove('scrolling')
        }
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

/* Mask */

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

/* Map */

ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.74318084414523, 37.61775855952447],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16,
    });

    myMap.geoObjects.add(new ymaps.Placemark([55.74318084414523, 37.61775855952447]), {}, {
        preset: 'islands#redIcon',
        iconColor: '#ff0000'
    }); 

    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');

    myMap.controls.add('routeButtonControl');
}