document.addEventListener('DOMContentLoaded', function () {

    $('.lang-active').on('click', function () {
        $(this).toggleClass('active');
        $('.lang-list').slideToggle(300);
    });

});