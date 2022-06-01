document.addEventListener('DOMContentLoaded', function () {

    $('.lang-active').on('click', function () {
        $(this).toggleClass('active');
        $('.lang-list').slideToggle(300);
    });

    $('.nav-block__mob-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-block').toggleClass('active');
        $('.country-block').toggleClass('hide');
        $('.overley').toggleClass('active');
        $('body').toggleClass('scroll-hide');
    });

    $('.country-block__mob-trigger ').on('click', function () {
        $(this).toggleClass('active');
        $('.country-block').toggleClass('active');
        $('.nav-block').toggleClass('hide');
        $('.overley').toggleClass('active');
        $('body').toggleClass('scroll-hide');
    });

});