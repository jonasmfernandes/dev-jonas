const dropdowns = document.querySelectorAll('.dropdown')
const changeTextIcon = document.getElementById('Moon')
const AboutMenuTablet = document.getElementById('AboutMenuTablet')
const h2Sandbox = document.getElementById('h2Sandbox')
const pSandbox = document.getElementById('pSandbox')
const textSandbox = document.getElementById('textSandbox')
const cardH2 = document.getElementById('cardH2')
const pCard1 = document.getElementById('pCard1')
const habitH2 = document.getElementById('habitH2')
const pCard2 = document.getElementById('pCard2')
const smokingH2 = document.getElementById('smokingH2')
const pCard3 = document.getElementById('pCard3')

const aboutDpText = document.getElementById('aboutDpText')
const blogDpText = document.getElementById('blogDpText')
const sandboxDpText = document.getElementById('sandboxDpText')
const aboutSandbox = document.getElementById("aboutSandbox");

const body = document.body
const changeMode = document.getElementById('changeMode')
const heroSandbox = document.getElementById("heroSandbox")
const sandboxThings = document.getElementById("sandboxThings")
// const h2Blog = document.getElementById("h2Blog");
// const pBlog = document.getElementById("pBlog");

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
     if (h2Sandbox.innerText === "Sandbox"
        && AboutMenuTablet.innerText === "About"
        && aboutDpText.innerText === "About"
        && sandboxDpText.innerText === "Sandbox"
        && aboutSandbox.innerText === "Sandbox"
        && pSandbox.innerText === "My Sandbox."
        && textSandbox.innerText === "This is where I experiment with UI and interaction design. I use this space to explore new ideas or recreate cool things."
        && cardH2.innerText === "Card Reveal"
        && pCard1.innerText === "Framer motion card flip to reveal additional information."
        && habitH2.innerText === "Habit Tracker"
        && pCard2.innerText === "A habit tracker, to practice crud and to help my friends."
        && smokingH2.innerText === "Stop Smoking"
        && pCard3.innerText === "A application to users who smokes a lot and wanna to stop."
        // && h2Blog.innerText === "Blog"
        // && pBlog.innerText === "3 posts so far. Stay tuned for more!"
    ){
        h2Sandbox.innerText = "Criações"
        AboutMenuTablet.innerText = "Sobre mim"
        aboutDpText.innerText = "Sobre mim"
        sandboxDpText.innerText = "Criações"
        // sandboxDropdown.innerText === "Criações"
        aboutSandbox.innerText = "Criações"
        pSandbox.innerText = "Minhas criações"
        textSandbox.innerText = "É aqui que faço experiências com UI e design de interação. Eu uso esse espaço para explorar novas ideias ou recriar coisas legais."
        cardH2.innerText = "Revelador de Cartão"
        pCard1.innerText = "Cartão de movimento do Framer virado para revelar informações adicionais."
        habitH2.innerText = "Rastreador de Hábitos"
        pCard2.innerText = "Um rastreador de hábitos, para praticar CRUD e ajudar meus amigos"
        smokingH2.innerText = "Pare de fumar"
        pCard3.innerText = "Uma aplicação para usuários que fumam em excesso e querem parar."
        // h2Blog.innerText = "Blog"
        // pBlog.innerText = "3 postagens até agora, fique ligado para mais!"
    }
    else {
        h2Sandbox.innerText = "Sandbox"
        AboutMenuTablet.innerText = "About"
        aboutDpText.innerText = "About"
        sandboxDpText.innerText = "Sandbox"
        // sandboxDropdown.innerText = "Sandbox"
        aboutSandbox.innerText = "Sandbox"
        pSandbox.innerText = "My Sandbox."
        textSandbox.innerText = "This is where I experiment with UI and interaction design. I use this space to explore new ideas or recreate cool things."
        cardH2.innerText = "Card Reveal"
        pCard1.innerText = "Framer motion card flip to reveal additional information."
        habitH2.innerText = "Habit Tracker"
        pCard2.innerText = "A habit tracker, to practice crud and to help my friends."
        smokingH2.innerText = "Stop Smoking"
        pCard3.innerText = "A application to users who smokes a lot and wanna to stop."
        // h2Blog.innerText = "Blog"
        // pBlog.innerText = "3 posts so far. Stay tuned for more!"
        
    }
})

changeMode.addEventListener("click", (event) => {
    event.preventDefault();
    const currentColor = window.getComputedStyle(body).backgroundColor;
  
    if (currentColor === "rgb(17, 17, 17)") {
      // 'rgb(17, 17, 17)' é a forma que '#111111' é representada
      body.style.backgroundColor = "#FFFFFF";
      aboutBlog.style.color = "#202020";
      aboutSandbox.style.color = "#202020";
      AboutMenuTablet.style.color = "#202020";
      logo.style.color = "#2A2A2A";
      changeTextIcon.style.color = "#2A2A2A";
      changeMode.style.color = "#2A2A2A";
      menu.style.color = "#2A2A2A";
  
      aboutDropdown.style.backgroundColor = "#F9F9F9"
      blogDropdown.style.backgroundColor = "#F9F9F9"
      sandboxDropdown.style.backgroundColor = "#F9F9F9"

      aboutDpText.style.color = "#111111" 
      blogDpText.style.color = "#111111" 
      sandboxDpText.style.color = "#111111" 
      h2Sandbox.style.color = "#111111" 
      heroSandbox.style.backgroundColor = "#FFFFFF"
      sandboxThings.style.backgroundColor = "#FFFFFF"
      pSandbox.style.color = "#7a7a7a" 
      textSandbox.style.color = "#7a7a7a"

      cardH2.style.color = "#111111"
      habitH2.style.color = "#111111"
      smokingH2.style.color = "#111111"

      pCard1.style.color = "#2A2A2A"
      pCard2.style.color = "#2A2A2A"
      pCard3.style.color = "#2A2A2A"
    } else {
      body.style.backgroundColor = "#111111";
      logo.style.color = "#EEEEEE";
      changeMode.style.color = "#a8a8a8";
      changeTextIcon.style.color = "#a8a8a8";
      menu.style.color = "#a8a8a8";
      AboutMenuTablet.style.color = "#a8a8a8";
      aboutBlog.style.color = "#a8a8a8";
      aboutSandbox.style.color = "#a8a8a8";
  
      aboutDropdown.style.backgroundColor = "#0A0A0A"
      blogDropdown.style.backgroundColor = "#0A0A0A"
      sandboxDropdown.style.backgroundColor = "#0A0A0A"
  
      aboutDpText.style.color = "#EEEEEE" 
      blogDpText.style.color = "#EEEEEE" 
      sandboxDpText.style.color = "#EEEEEE" 
      heroSandbox.style.backgroundColor = "#111111"
      sandboxThings.style.backgroundColor = "#111111"
      h2Sandbox.style.color = "#EEEEEE" 
      pSandbox.style.color = "#A8A8A8"
      textSandbox.style.color = "#5f5f5f" 

      cardH2.style.color = "#EEEEEE"
      habitH2.style.color = "#EEEEEE"
      smokingH2.style.color = "#EEEEEE"

      pCard1.style.color = "#A8A8A8"
      pCard2.style.color = "#A8A8A8"
      pCard3.style.color = "#A8A8A8"
    }
  });