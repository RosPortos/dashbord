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




    function textarea() {
        const ta = document.querySelector('.textarea');
        const counter = document.querySelector('.length-item__num');

        ta.addEventListener('input', onInput);

        function onInput(evt) {
            const length = evt.target.value.length;
            counter.textContent = length;
        }
    }

    if (document.querySelector('.length-item__num')) {
        textarea();
    }

    $('.select-two-item__star input').on('click', function () {
        $(this).parent().toggleClass('active');
        $(this).parents('.select-two-item').toggleClass('active');
    });

    $('.select-two-item__text').on('click', function () {
        let text = $(this).text();
        $(this).parents('.select-two').find('.top-text').text(text);
        $(this).parents('.select-two').find('.top-text').addClass('active');
        $(this).parents('.select-two').find('.top-input').val(text);
        $('.select-two__content').slideUp(200);
        $('.select-two__top').removeClass('active');
    });

    $(document).mouseup(function (e) {
        if (!$('.select-two-wrap').is(e.target)
            && $('.select-two-wrap').has(e.target).length === 0) {
            $('.select-two__top').removeClass('active');
            $('.select-two__content').slideUp(200);
        }
    });

    $('.select-two__top').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle(200);
    });

});