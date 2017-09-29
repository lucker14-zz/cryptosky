// Load more btn
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


// contact form popup
var open_btns = [].slice.call(document.querySelectorAll('.container--box button.btn'))
var popup_bg = document.querySelector('.popup-bg')
var close_btn = document.querySelector('.popup-container .close')

function openModal(){
    if (popup_bg.classList.contains('hidden'))
        popup_bg.classList.remove('hidden')
    if (popup_bg.classList.contains('disabled'))
        popup_bg.classList.remove('disabled')
}

function closeModal(){
    if (!popup_bg.classList.contains('hidden'))
        popup_bg.classList.add('hidden')
    if (!popup_bg.classList.contains('disabled'))
        popup_bg.classList.add('disabled')
}

open_btns.forEach(function(item, index){
    item.addEventListener('click', openModal)
})

close_btn.addEventListener('click', closeModal)

popup_bg.addEventListener('click', function(e){
    if (e.target.classList.contains('popup-bg')) 
        closeModal()
})