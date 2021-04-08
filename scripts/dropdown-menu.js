window.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('.style-menu__btn').forEach(function(el) {
       el.addEventListener('click', function(event) {
           console.log(el.nextElementSibling.classList.contains('submenu_is-active'))
           if (el.nextElementSibling.classList.contains('submenu_is-active')) {
               el.nextElementSibling.classList.remove('submenu_is-active')
           } else {
                document.querySelectorAll('.submenu').forEach(function(el) {
                    el.classList.remove('submenu_is-active')
                })
               el.nextElementSibling.classList.add('submenu_is-active')
           }
        //    document.querySelectorAll('.submenu').forEach(function(el) {
        //        el.classList.remove('submenu_is-active')
        //    })
        //    el.nextElementSibling.classList.toggle('submenu_is-active')
       })
   })
})