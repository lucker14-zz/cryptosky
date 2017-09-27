$(document).ready(function(){
    console.log('ready')
    if (window.innerWidth < 1023) {
        console.log('should run')
        $('.container--boxes').slick({
            'prevArrow': '',
            'nextArrow': ''
        });
    }
});
    