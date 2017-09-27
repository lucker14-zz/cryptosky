$(document).ready(function(){
    if (window.innerWidth < 1023) {
        $('.container--boxes').slick({
            'prevArrow': '',
            'nextArrow': ''
        });
    }
});
    

var btn_showmore = document.querySelector('.roller .content button')
var transparent = document.querySelector('.roadmap .transparent')
var roller = document.querySelector('.roller')
var roadmap_grid = document.querySelector('.roadmap-grid')
var lines = [].slice.call(document.querySelectorAll('.roadmap-line'))

function showAll(){
    transparent.classList.add('hidden')
    roller.classList.add('hidden')
    lines.forEach(function(item, index){
        if (item.classList.contains('hidden')) 
            item.classList.remove('hidden')
    })
    roadmap_grid.style.marginBottom = '70px';
}

btn_showmore.addEventListener('click', showAll)