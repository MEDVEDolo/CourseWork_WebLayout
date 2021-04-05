window.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('.style-menu__btn').forEach(function(el) {
       el.addEventListener('click', function(event) {
        document.querySelector('.submenu').classList.toggle('submenu_is-active')
       })
   })
})