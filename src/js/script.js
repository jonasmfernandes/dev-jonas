const dropdowns = document.querySelectorAll('.dropdown')
const imgs = document.getElementsByClassName("project-content")
const img = document.querySelectorAll(".project-content img")

dropdowns.forEach(dropdown => {
    const select = document.querySelector('.select')
    const caret = document.querySelector('.caret')
    const menu = document.querySelector('.menu')
    const options = document.querySelectorAll('.menu li')
    const selected = document.querySelectorAll('.selected')
    
    select.addEventListener('click', () => {
        select.classList.toggle('selected-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-open')
    })
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')
            options.forEach(option => {
                option.classList.remove('active')
            })
            option.classList.add('active')
        })
    })
    window.addEventListener('click', function(event) {
        if (!select.contains(event.target)) {
            menu.classList.remove('menu-open');
        }
    });
})
let idx = 0
function carrousel(){
    idx++
    if(idx > img.length - 1){
        idx = 0
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}
setInterval(carrousel, 1800)
console.log('ta funcionando?')
console.log('ta')
console.log(img.length)
