const dropdowns = document.querySelectorAll('.dropdown')

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
})

document.addEventListener('DOMContentLoaded', (event) => {
    const select = document.querySelector('.select');
    const menu = document.querySelector('.menu');

    select.addEventListener('click', function(event) {
        event.stopPropagation();
        menu.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!select.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});



console.log('ta funcionando?')
console.log('ta')