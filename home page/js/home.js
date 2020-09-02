var name;
var name2;
function ChangescreenFunction(event) {
    name = $(event.target).data('name');
    $('.' + name).removeAttr('hidden');
    name2 = $(event.target).siblings().data('name');
    $('.' + name2).attr('hidden', true);  
}


$(document).ready(function () {
    $(".changebtn").on('click', function (event) {
        ChangescreenFunction(event);
        if ($(this).siblings().hasClass('active')) {
            $(this).siblings().removeClass('active');
        }
        $(this).addClass('active');


    });

});
