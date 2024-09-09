const dropdowns = document.querySelectorAll('.dropdown')
const changeTextIcon = document.getElementById('Moon')
const changeMode = document.getElementById("darkLight");
const menu = document.getElementById("menu");
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

const AboutMenuTablet = document.getElementById("AboutMenuTablet");
const logo = document.getElementById("logo");
const aboutSandbox = document.getElementById("aboutSandbox");
const aboutBlog = document.getElementById("aboutBlog");
const aboutDropdown = document.getElementById('aboutDropdown')
const blogDropdown = document.getElementById('blogDropdown')
const sandboxDropdown = document.getElementById('sandboxDropdown')

const aboutDpText = document.getElementById('aboutDpText')
const blogDpText = document.getElementById('blogDpText')
const sandboxDpText = document.getElementById('sandboxDpText')

const heroContainer = document.getElementById('heroContainer')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

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
      heroContainer.style.backgroundColor = "#FFFFFF"
      JonasHero.style.color = "#2A2A2A"

      JonasText.style.color = "#7A7A7A"
      PinnedProjects.style.color = "#7A7A7A"
      pCovid.style.color = "#7A7A7A"
      pBills.style.color = "#7A7A7A"
      pSmoke.style.color = "#7A7A7A"

      h2Bills.style.color = "#2A2A2A"
      h2Smoke.style.color = "#2A2A2A"
      h2Covid.style.color = "#2A2A2A"
      btn1.style.backgroundColor = "#F9F9F9"
      btn2.style.backgroundColor = "#F9F9F9"

      btnContent1.style.color = "#2A2A2A"
      Resume.style.color = "#2A2A2A"
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
      heroContainer.style.backgroundColor = "#111111"
      JonasHero.style.color = "#EEEEEE"

      JonasText.style.color = "#A8A8A8"
      PinnedProjects.style.color = "#A8A8A8"
      pCovid.style.color = "#A8A8A8"
      pBills.style.color = "#A8A8A8"
      pSmoke.style.color = "#A8A8A8"

      h2Bills.style.color = "#EEEEEE"
      h2Smoke.style.color = "#EEEEEE"
      h2Covid.style.color = "#EEEEEE"

      btn1.style.backgroundColor = "#1C1C1C"
      btn2.style.backgroundColor = "#1C1C1C"

      btnContent1.style.color = "#EEEEEE"
      Resume.style.color = "#EEEEEE"
    }
  });

changeTextIcon.addEventListener('click', () => {
    event.preventDefault();
    if (h2Covid.innerText === "COVID-19 Dashboard"
        // && AboutMenu.innerText === "About"
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
        // AboutMenu.innerText = "Sobre mim"
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
        // AboutMenu.innerText = "About"
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
