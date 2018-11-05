$(function () {
    const $button = $('.button');
    const $hide = $('.hide');

    $button.on('click', function() {
        if ($hide.hasClass('visible')){
            $hide.slideUp();
        } else {
            $hide.slideDown();
        }
        $hide.toggleClass('visible');
    });


});