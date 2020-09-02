$(document).ready(function () {
    $('.first-section .nav-link').on('click', function (e) {
        if ($('.first-section .nav-link').hasClass('active')) {
            $('.first-section .nav-link').removeClass('active');
        }
        $(this).addClass('active');
        if ($('.first-section .nav-item').hasClass('active')) {
            $('.first-section .nav-item').removeClass('active');
        }
        $(this).parent().addClass('active');

    });


   
   
});
