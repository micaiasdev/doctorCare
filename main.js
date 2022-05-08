window.addEventListener('scroll', onScroll)

var navigation = document.querySelector('#navigation')
var body = document.querySelector('body')
var backToTopButton = document.querySelector('#backToTopButton')

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  invertColorShowBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  // Verificar se a seção passou da linha
  // Quais dados vou precisar

  // o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base esta abaixo da linha alvo
  // quais dados vou precisar?

  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o fim da seção passou da linha alvo

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limtes da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  console.log(sectionId)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  } else {
    navigation.classList.add('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY < 500) {
    backToTopButton.classList.remove('show')
  } else {
    backToTopButton.classList.add('show')
  }
}

function invertColorShowBackToTopButtonOnScroll() {
  //Posso subtrair alguma variável que faça sentido...
  if (scrollY < 4013) {
    backToTopButton.firstChild.classList.remove('invertColor')
  } else {
    backToTopButton.firstChild.classList.add('invertColor')
  }
}

function openMenu() {
  body.classList.add('menu-expanded')
}

function closeMenu() {
  body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 850
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content p,
#about .content img`)
