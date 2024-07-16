const dropdowns = document.querySelectorAll('.dropdown')
const changeTextIcon = document.getElementById('Moon')

const AboutMenu = document.getElementById('AboutMenu')
const JonasHero = document.getElementById('JonasHero')
const JonasText = document.getElementById('JonasText')
const Resume = document.getElementById('Resume')
const PinnedProjects = document.getElementById('PinnedProjects')
const h2Covid = document.getElementById('h2Covid')
const pCovid = document.getElementById('pCovid')
const h2Bills = document.getElementById('h2Bills')
const pBills = document.getElementById('pBills')
const h2Smoke = document.getElementById('h2Smoke')
const pSmoke = document.getElementById('pSmoke')

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
    if (h2Covid.innerText === "COVID-19 Dashboard"
        && AboutMenu.innerText === "About"
        && JonasHero.innerText === "hey, Jonas here!"
        && JonasText.innerText === "I am a software developer who builds for the web with a design-oriented approach. In addiction to coding, I write some posts where i focus on tech and productivity."
        && Resume.innerText === "Resume"
        && PinnedProjects.innerText === "Pinned Projects"
        && pCovid.innerText === "COVID-19 Dashboard: Real-Time Data Visualization."
        && h2Bills.innerText === "Bills Analyzer"
        && pBills.innerText === "Spending Analyzer: Simplified and effective financial control."
        && h2Smoke.innerText === "Smoke Tracker"
        && pSmoke.innerText === "Smoking Tracker: Personalized monitoring for changing habits."

    ){
        h2Covid.innerText = "Painel COVID-19"
        AboutMenu.innerText = "Sobre mim"
        JonasHero.innerText = "E aí, Jonas aqui!"
        JonasText.innerText = "Sou um desenvolvedor de software que desenvolve para a web com uma abordagem orientada ao design. Além dos códigos, escrevo alguns posts onde foco em tecnologia e produtividade."
        Resume.innerText = "Currículo"
        PinnedProjects.innerText = "Projetos Fixados"
        pCovid.innerText = "Dashboard de COVID-19: Visualização de dados em tempo real."
        h2Bills.innerText = "Analisador de gastos"
        pBills.innerText = "Analisador de Gastos: Controle financeiro simplificado e eficaz."
        h2Smoke.innerText = "Rastreador de fumante"
        pSmoke.innerText = "Rastreador de Fumantes: Monitoramento personalizado para mudança de hábitos."
    }
    else {
        h2Covid.innerText = "COVID-19 Dashboard"
        AboutMenu.innerText = "About"
        JonasHero.innerText = "hey, Jonas here!"
        JonasText.innerText = "I am a software developer who builds for the web with a design-oriented approach. In addiction to coding, I write some posts where i focus on tech and productivity."
        Resume.innerText = "Resume"
        PinnedProjects.innerText = "Pinned Projects"
        pCovid.innerText = "COVID-19 Dashboard: Real-Time Data Visualization."
        h2Bills.innerText = "Bills Analyzer"
        pBills.innerText = "Spending Analyzer: Simplified and effective financial control."
        h2Smoke.innerText = "Smoke Tracker"
        pSmoke.innerText = "Smoking Tracker: Personalized monitoring for changing habits."
    }
})