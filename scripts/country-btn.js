window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__btn').forEach(function(el) {
        el.addEventListener('click', function(event) {
            if (el.classList.contains('catalog__btn__is-active')) {
                el.nextElementSibling.classList.remove('catalog__btn__is-active')
            } else {
                 document.querySelectorAll('.catalog__btn').forEach(function(el) {
                     el.classList.remove('catalog__btn__is-active')
                 })
 
                el.classList.add('catalog__btn__is-active')
            }
        })
    })
 })