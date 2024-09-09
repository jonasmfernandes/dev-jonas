const dropdowns = document.querySelectorAll(".dropdown");
const changeTextIcon = document.getElementById("Moon");
const changeMode = document.getElementById("darkLight");
const menu = document.getElementById("menu");
const AboutMenuTablet = document.getElementById("AboutMenuTablet");
const AboutMenu = document.getElementById("AboutMenu");
const AboutHero = document.getElementById("AboutHero");
const pHeroAbout = document.getElementById("pHeroAbout");
const h3About = document.getElementById("h3About");
const pAbout = document.getElementById("pAbout");
const pAbout2 = document.getElementById("pAbout2");
const pAbout3 = document.getElementById("pAbout3");
const h2Connect = document.getElementById("h2Connect");
const h2Work = document.getElementById("h2Work");
const pWork = document.getElementById("pWork");
const h2B2x = document.getElementById("h2B2x");
const h2Kaizen = document.getElementById("h2Kaizen");
const h2Sankhya = document.getElementById("h2Sankhya");
const h2Unimax = document.getElementById("h2Unimax");
const spanB2x = document.getElementById("spanB2x");
const body = document.body;
const heroAbout = document.getElementById("heroAbout");
const logo = document.getElementById("logo");
const aboutSandbox = document.getElementById("aboutSandbox");
const aboutBlog = document.getElementById("aboutBlog");
const b2xSubtitle = document.getElementById("b2xSubtitle");
const kaizenSubtitle = document.getElementById("kaizenSubtitle");
const unimaxSubtitle = document.getElementById("unimaxSubtitle");
const sankhyaSubtitle = document.getElementById("sankhyaSubtitle");
const btnConnect1 = document.getElementById("btnConnect1");
const btnConnect2 = document.getElementById("btnConnect2");
const btnConnect3 = document.getElementById("btnConnect3");

const btnText1 = document.getElementById("btnText1");
const btnText2 = document.getElementById("btnText2");
const btnText3 = document.getElementById("btnText3");

const btnIcon1 = document.getElementById("btnIcon1");
const btnIcon2 = document.getElementById("btnIcon2");
const btnIcon3 = document.getElementById("btnIcon3");

const btnArrow1 = document.getElementById("btnArrow1");
const btnArrow2 = document.getElementById("btnArrow2");
const btnArrow3 = document.getElementById("btnArrow3");

const aboutDropdown = document.getElementById('aboutDropdown')
const blogDropdown = document.getElementById('blogDropdown')
const sandboxDropdown = document.getElementById('sandboxDropdown')

const aboutDpText = document.getElementById('aboutDpText')
const blogDpText = document.getElementById('blogDpText')
const sandboxDpText = document.getElementById('sandboxDpText')



dropdowns.forEach((dropdown) => {
  const select = document.querySelector(".select");
  const caret = document.querySelector(".caret");
  const menu = document.querySelector(".menu");
  const options = document.querySelectorAll(".menu li");
  const selected = document.querySelectorAll(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("selected-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
  window.addEventListener("click", function (event) {
    if (!select.contains(event.target)) {
      menu.classList.remove("menu-open");
    }
  });
});
changeMode.addEventListener("click", (event) => {
  event.preventDefault();
  const currentColor = window.getComputedStyle(body).backgroundColor;

  if (currentColor === "rgb(17, 17, 17)") {
    // 'rgb(17, 17, 17)' é a forma que '#111111' é representada
    body.style.backgroundColor = "#FFFFFF";
    AboutHero.style.color = "#202020";
    aboutBlog.style.color = "#202020";
    aboutSandbox.style.color = "#202020";
    AboutMenuTablet.style.color = "#202020";
    pHeroAbout.style.color = "#7A7A7A";
    heroAbout.style.backgroundColor = "#FFFFFF";
    logo.style.color = "#111111";
    changeTextIcon.style.color = "#2A2A2A";
    changeMode.style.color = "#2A2A2A";
    menu.style.color = "#2A2A2A";
    pAbout.style.color = "#111111";
    pWork.style.color = "#111111";
    pAbout2.style.color = "#111111";
    pAbout3.style.color = "#111111";
    h3About.style.color = "#7A7A7A";
    h2Connect.style.color = "#7A7A7A";
    h2Work.style.color = "#7A7A7A";

    h2B2x.style.color = "#111111";
    h2Kaizen.style.color = "#111111";
    h2Sankhya.style.color = "#111111";
    h2Unimax.style.color = "#111111";

    b2xSubtitle.style.color = "#7A7A7A";
    kaizenSubtitle.style.color = "#7A7A7A";
    sankhyaSubtitle.style.color = "#7A7A7A";
    unimaxSubtitle.style.color = "#7A7A7A";

    btnConnect1.style.backgroundColor = "#F9F9F9";
    btnConnect2.style.backgroundColor = "#F9F9F9";
    btnConnect3.style.backgroundColor = "#F9F9F9";

    btnText1.style.color = "#111111";
    btnText2.style.color = "#111111";
    btnText3.style.color = "#111111";

    btnIcon1.style.color = "#111111";
    btnIcon2.style.color = "#111111";
    btnIcon3.style.color = "#111111";

    btnArrow1.style.color = "#191919";
    btnArrow2.style.color = "#191919";
    btnArrow3.style.color = "#191919";

    aboutDropdown.style.backgroundColor = "#F9F9F9"
    blogDropdown.style.backgroundColor = "#F9F9F9"
    sandboxDropdown.style.backgroundColor = "#F9F9F9"

    aboutDpText.style.color = "#111111" 
    blogDpText.style.color = "#111111" 
    sandboxDpText.style.color = "#111111" 

    
  } else {
    body.style.backgroundColor = "#111111";
    AboutHero.style.color = "#EEEEEE";
    pHeroAbout.style.color = "#a8a8a8";
    heroAbout.style.backgroundColor = "#111111";
    logo.style.color = "#EEEEEE";
    changeMode.style.color = "#a8a8a8";
    changeTextIcon.style.color = "#a8a8a8";
    menu.style.color = "#a8a8a8";
    pAbout.style.color = "#EEEEEE";
    pWork.style.color = "#EEEEEE";
    h2B2x.style.color = "#EEEEEE";
    h2Kaizen.style.color = "#EEEEEE";
    h2Sankhya.style.color = "#EEEEEE";
    h2Unimax.style.color = "#EEEEEE";
    pAbout2.style.color = "#EEEEEE";
    pAbout3.style.color = "#EEEEEE";
    h3About.style.color = "#a8a8a8";
    h2Connect.style.color = "#a8a8a8";
    h2Work.style.color = "#a8a8a8";
    AboutMenuTablet.style.color = "#a8a8a8";
    aboutBlog.style.color = "#a8a8a8";
    aboutSandbox.style.color = "#a8a8a8";

    b2xSubtitle.style.color = "#A8A8A8";
    kaizenSubtitle.style.color = "#A8A8A8";
    sankhyaSubtitle.style.color = "#A8A8A8";
    unimaxSubtitle.style.color = "#A8A8A8";

    btnConnect1.style.backgroundColor = "#191919";
    btnConnect2.style.backgroundColor = "#191919";
    btnConnect3.style.backgroundColor = "#191919";

    btnText1.style.color = "#EEEEEE";
    btnText2.style.color = "#EEEEEE";
    btnText3.style.color = "#EEEEEE";

    btnIcon1.style.color = "#EEEEEE";
    btnIcon2.style.color = "#EEEEEE";
    btnIcon3.style.color = "#EEEEEE";

    btnArrow1.style.color = "#EEEEEE";
    btnArrow2.style.color = "#EEEEEE";
    btnArrow3.style.color = "#EEEEEE";

    aboutDropdown.style.backgroundColor = "#0A0A0A"
    blogDropdown.style.backgroundColor = "#0A0A0A"
    sandboxDropdown.style.backgroundColor = "#0A0A0A"

    aboutDpText.style.color = "#EEEEEE" 
    blogDpText.style.color = "#EEEEEE" 
    sandboxDpText.style.color = "#EEEEEE" 
  }
});

changeTextIcon.addEventListener("click", () => {
  event.preventDefault();
  if (
    AboutHero.innerText === "About" &&
    AboutMenuTablet.innerText === "About" &&
    AboutMenu.innerText === "About" &&
    pHeroAbout.innerText === "A glimpse into me." &&
    h3About.innerText === "About" &&
    pAbout.innerText ===
      "Hello, my name is Jonas, born in Brazil. I've been building codes for 2 years. As a software developer, I specialize in front-end web development and UX/UI Design." &&
    pAbout2.innerText ===
      "In addition to coding, I like to write on medium, about technology, coding and personal development." &&
    pAbout3.innerText ===
      "When I'm not at my desk, I am probably lifting weights, with my girlfriend or reading some good books." &&
    h2Connect.innerText === "Connect" &&
    h2Work.innerText === "Work" &&
    pWork.innerText ===
      "I specialize in React, web development, UI/UX and motion design. But I am always learning new things. Here are some of the places I worked." &&
    h2B2x.innerText === "Software Technician" &&
    h2Kaizen.innerText === "Front-end Developer" &&
    h2Sankhya.innerText === "Back-end Developer" &&
    h2Unimax.innerText === "Intern Technician" &&
    spanB2x.innerText === "2023 - Current"
  ) {
    AboutHero.innerText = "Sobre mim";
    AboutMenuTablet.innerText = "Sobre mim";
    AboutMenu.innerText = "Sobre mim";
    pHeroAbout.innerText = "Um vislumbre sobre mim.";
    h3About.innerText = "Sobre mim";
    pAbout.innerText =
      "Olá, meu nome é Jonas, nascido no Brasil. Estou construindo códigos há 2 anos. Como desenvolvedor de software, sou especialista em desenvolvimento web front-end e aliado à UX/UI Design.";
    pAbout2.innerText =
      "Além dos códigos, gosto de escrever no Medium. Escrevo sobre tecnologia, códigos e desenvolvimento pessoal.";
    pAbout3.innerText =
      "Quando não estou no meu computador, provavelmente estou na academia, com minha namorada ou lendo bons livros.";
    h2Connect.innerText = "Conecte-se";
    h2Work.innerText = "Experiência de Trabalho";
    pWork.innerText =
      "Sou especialista em React, desenvolvimento web, UI/UX e motion design. Mas estou sempre aprendendo novas tecnologias. Aqui estão os lugares onde trabalhei.";
    h2B2x.innerText = "Técnico de Software";
    h2B2x.style.fontSize = "1rem";
    h2Kaizen.innerText = "Desenvolvedor Front-end";
    h2Kaizen.style.fontSize = "1rem";
    h2Sankhya.innerText = "Desenvolvedor Back-end";
    h2Sankhya.style.fontSize = "1rem";
    h2Unimax.innerText = "Estagiário de Informática";
    h2Unimax.style.fontSize = "1rem";
    spanB2x.innerText = "2023 - Atual";
  } else {
    AboutHero.innerText = "About";
    AboutMenuTablet.innerText = "About";
    AboutMenu.innerText = "About";
    pHeroAbout.innerText = "A glimpse into me.";
    h3About.innerText = "About";
    pAbout.innerText =
      "Hello, my name is Jonas, born in Brazil. I've been building codes for 2 years. As a software developer, I specialize in front-end web development and UX/UI Design.";
    pAbout2.innerText =
      "In addition to coding, I like to write on medium, about technology, coding and personal development.";
    pAbout3.innerText =
      "When I'm not at my desk, I am probably lifting weights, with my girlfriend or reading some good books.";
    h2Connect.innerText = "Connect";
    h2Work.innerText = "Work";
    pWork.innerText =
      "I specialize in React, web development, UI/UX and motion design. But I am always learning new things. Here are some of the places I worked.";
    h2B2x.innerText = "Software Technician";
    h2B2x.style.fontSize = "1rem";
    h2Kaizen.style.fontSize = "1rem";
    h2Sankhya.style.fontSize = "1rem";
    h2Unimax.style.fontSize = "1rem";
    h2Kaizen.innerText = "Front-end Developer";
    h2Sankhya.innerText = "Back-end Developer";
    h2Unimax.innerText = "Intern Technician";
    spanB2x.innerText = "2023 - Current";
  }
});
