window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion__btn').forEach(function(el) {
        el.addEventListener('click', function(event) {
            document.querySelectorAll('.catalog__accordion-content').forEach(function(el) {
                el.classList.add('catalog__accordion-content_non-active');
            })

            var parent = el.parentNode;

            for (var i = 0; i < 4; i++) {
                parent = parent.parentNode;
            }

            var artistClass = el.classList[2];
            
            if (artistClass == 'accordion__btn_empty') {
                parent.querySelector('.catalog__accordion-content_empty').classList.remove('catalog__accordion-content_non-active');
            } else {
                document.querySelector(`.catalog__accordion-content_${artistClass}`).classList.remove('catalog__accordion-content_non-active');
            }
        })
    })
 })