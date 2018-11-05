$(function () {
    const $button = $('#button');
    const $hide = $('.hide');

    $button.on('click', function() {
        $hide.toggleClass('visible');
            if ($hide.hasClass('visible')){
                $hide.slideUp();
            } else {
                $hide.slideDown();
            }

    });


});