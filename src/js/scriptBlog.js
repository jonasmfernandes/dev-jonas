const dropdowns = document.querySelectorAll('.dropdown')
const changeTextIcon = document.getElementById('Moon')
const AboutMenuTablet = document.getElementById('AboutMenuTablet')
// const h2Sandbox = document.getElementById('h2Sandbox')
// const pSandbox = document.getElementById('pSandbox')
// const textSandbox = document.getElementById('textSandbox')
// const cardH2 = document.getElementById('cardH2')
// const pCard1 = document.getElementById('pCard1')
// const habitH2 = document.getElementById('habitH2')
// const pCard2 = document.getElementById('pCard2')
// const smokingH2 = document.getElementById('smokingH2')
// const pCard3 = document.getElementById('pCard3')

const aboutDpText = document.getElementById('aboutDpText')
const blogDpText = document.getElementById('blogDpText')
const sandboxDpText = document.getElementById('sandboxDpText')
const aboutSandbox = document.getElementById("aboutSandbox");

const h2Blog = document.getElementById("h2Blog");
const pBlog = document.getElementById("pBlog");

const h3Blog1 = document.getElementById('h3Blog1')
const h3Blog2 = document.getElementById('h3Blog2')
const h3Blog3 = document.getElementById('h3Blog3')

const pBlog1 = document.getElementById('pBlog1')
const pBlog2 = document.getElementById('pBlog2')
const pBlog3 = document.getElementById('pBlog3')

const pBlog4 = document.getElementById('pBlog4')
const pBlog5 = document.getElementById('pBlog5')
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

changeTextIcon.addEventListener('click', () => {
    event.preventDefault();
     if (AboutMenuTablet.innerText === "About"
        && aboutDpText.innerText === "About"
        && sandboxDpText.innerText === "Sandbox"
        && aboutSandbox.innerText === "Sandbox"
        && h2Blog.innerText === "Blog"
        && pBlog.innerText === "3 posts so far. Stay tuned for more!"
        && h3Blog1.innerText === "TailwindCSS: How to optimize your CSS with fast utilities."
        && h3Blog2.innerText === "Pomodoro: The productivity technique to improve your daily focus."
        && h3Blog3.innerText === "Notion: Organize your life and work with digital efficiency."
        && pBlog4.innerText === "Coming Soon"
        && pBlog5.innerText === "Coming Soon"
    ){
        AboutMenuTablet.innerText = "Sobre mim"
        aboutDpText.innerText = "Sobre mim"
        sandboxDpText.innerText = "Criações"
        // sandboxDropdown.innerText === "Criações"
        aboutSandbox.innerText = "Criações"
        h2Blog.innerText = "Blog"
        pBlog.innerText = "3 postagens até agora, fique ligado para mais!"
        h3Blog1.innerText = "TailwindCSS: Como otimizar seu CSS com utilitários rápidos."    
        h3Blog2.innerText = "Pomodoro: A técnica de produtividade para melhorar seu foco diário."
        h3Blog3.innerText = "Notion: Organize sua vida e trabalho com eficiência digital."
        pBlog4.innerText = "Em breve"
        pBlog5.innerText = "Em breve"
    }
    else {
        AboutMenuTablet.innerText = "About"
        aboutDpText.innerText = "About"
        sandboxDpText.innerText = "Sandbox"
        // sandboxDropdown.innerText = "Sandbox"
        aboutSandbox.innerText = "Sandbox"
        h2Blog.innerText = "Blog"
        pBlog.innerText = "3 posts so far. Stay tuned for more!"
        
        h3Blog1.innerText = "TailwindCSS: How to optimize your CSS with fast utilities."
        h3Blog2.innerText = "Pomodoro: The productivity technique to improve your daily focus."
        h3Blog3.innerText = "Notion: Organize your life and work with digital efficiency."
        pBlog4.innerText = "Coming Soon"
        pBlog5.innerText = "Coming Soon"
    }
})