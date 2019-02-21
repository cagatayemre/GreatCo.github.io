$(document).ready(function () {

    /* ============= HAMBURGER ICON ============= */

    $('.navbar-toggler').click(function () {
        $('.navbar-toggler span').toggleClass('active');
    });

    $('.navbar-nav a').click(function () {
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler span').removeClass('active');
    });

    /* ============= CONTACT LABEL ON FOCUS ============= */

    $('.contact-item').focus(function () {
        $(this).next('label').addClass('focus');
    }).blur(function () {
        if ($(this).val() === '') {
            $(this).next('label').removeClass('focus');
        }
    })

});