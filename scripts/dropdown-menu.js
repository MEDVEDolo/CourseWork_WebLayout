window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.style-menu__btn').addEventListener('click', function() {
        document.querySelector('.style-menu__submenu').classList.toggle('.style-menu__submenu_is-active')
    })
})