window.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('.style-menu__btn').forEach(function(el) {
       el.addEventListener('click', function(event) {
        el.nextElementSibling.classList.toggle('submenu_is-active')
       })
   })
})