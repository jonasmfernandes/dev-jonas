const dropdowns = document.querySelectorAll('.dropdown')
const changeTextIcon = document.getElementById('Moon')
const AboutMenuTablet = document.getElementById('AboutMenuTablet')
const AboutMenu = document.getElementById('AboutMenu')
const AboutHero = document.getElementById('AboutHero')
const pHeroAbout = document.getElementById('pHeroAbout')
const h3About = document.getElementById('h3About')
const pAbout = document.getElementById('pAbout')
const pAbout2 = document.getElementById('pAbout2')
const pAbout3 = document.getElementById('pAbout3')
const h2Connect = document.getElementById('h2Connect')
const h2Work = document.getElementById('h2Work')
const pWork = document.getElementById('pWork')
const h2B2x = document.getElementById('h2B2x')
const h2Kaizen = document.getElementById('h2Kaizen')
const h2Sankhya = document.getElementById('h2Sankhya')
const h2Unimax = document.getElementById('h2Unimax')

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
    if (AboutHero.innerText === "About"
        && AboutMenuTablet.innerText === "About"
        && AboutMenu.innerText === "About"
        && pHeroAbout.innerText === "A glimpse into me."
        && h3About.innerText === "About"
        && pAbout.innerText === "Hi, I'm Jonas, born in Brazil. I have been coding for 2 years. As a software developer, I specialize in front-end web development and design."
        && pAbout2.innerText === "In addition to coding, I like to write on medium, about technology, coding and personal development."
        && pAbout3.innerText === "When I'm not at my desk, I am probably lifting weights, with my girlfriend or reading some good books."
        && h2Connect.innerText === "Connect"
        && h2Work.innerText === "Work"
        && pWork.innerText === "I specialize in React, web development, UI/UX and motion design. But I am always learning new things. Here are some of the places I worked."
        && h2B2x.innerText === "Software Technician"
        && h2Kaizen.innerText === "Front-end Developer"
        && h2Sankhya.innerText === "Back-end Developer"
        && h2Unimax.innerText === "Intern Technician"
    ){
        AboutHero.innerText = "Sobre mim"
        AboutMenuTablet.innerText = "Sobre mim"
        AboutMenu.innerText = "Sobre mim"
        pHeroAbout.innerText = "Um vislumbre sobre mim."
        h3About.innerText = "Sobre mim"
        pAbout.innerText = "Olá, meu nome é Jonas, nascido no Brasil. Estou codificando há 2 anos. Como desenvolvedor de software, sou especializado em desenvolvimento e design web front-end."
        pAbout2.innerText = "Além dos códigos, gosto de escrever no Medium. Escrevo sobre tecnologia, códigos e desenvolvimento pessoal."
        pAbout3.innerText = "Quando não estou no meu computador, provavelmente estou na academia, com minha namorada ou lendo bons livros."
        h2Connect.innerText = "Conecte-se"
        h2Work.innerText = "Experiência de Trabalho"
        pWork.innerText = "Sou especialista em React, desenvolvimento web, UI/UX e motion design. Mas estou sempre aprendendo novas tecnologias. Aqui estão os lugares onde trabalhei."
        h2B2x.innerText = "Técnico de Software"
        h2B2x.style.fontSize = '0.9rem'
        h2Kaizen.innerText = "Desenvolvedor Front-end"
        h2Kaizen.style.fontSize = '0.9rem'
        h2Sankhya.innerText = "Desenvolvedor Back-end"
        h2Sankhya.style.fontSize = '0.9rem'
        h2Unimax.innerText = "Estagiário de Informática"
        h2Unimax.style.fontSize = '0.9rem'
    }   
    else {
        AboutHero.innerText = "About"
        AboutMenuTablet.innerText = "About"
        AboutMenu.innerText = "About"
        pHeroAbout.innerText = "A glimpse into me."
        h3About.innerText = "About"
        pAbout.innerText = "Hi, I'm Jonas, born in Brazil. I have been coding for 2 years. As a software developer, I specialize in front-end web development and design."
        pAbout2.innerText = "In addition to coding, I like to write on medium, about technology, coding and personal development."
        pAbout3.innerText = "When I'm not at my desk, I am probably lifting weights, with my girlfriend or reading some good books."
        h2Connect.innerText = "Connect"
        h2Work.innerText = "Work"
        pWork.innerText = "I specialize in React, web development, UI/UX and motion design. But I am always learning new things. Here are some of the places I worked."
        h2B2x.innerText = "Software Technician"
        h2B2x.style.fontSize = '1rem'
        h2Kaizen.style.fontSize = '1rem'
        h2Sankhya.style.fontSize = '1rem'
        h2Unimax.style.fontSize = '1rem'
        h2Kaizen.innerText = "Front-end Developer"
        h2Sankhya.innerText = "Back-end Developer"
        h2Unimax.innerText = "Intern Technician"
        
    }
})