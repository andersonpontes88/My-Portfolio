const menu = document.querySelector('nav')

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 300)
    
}

window.addEventListener('scroll', activeScroll)

// EVENTO CLICK ABRIR MENU //

const btnMenu = document.getElementById('btn-menu')
const menuAbrir = document.getElementById('menu-mobile')
const overlayFechar = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', () => {
    menuAbrir.classList.add('abrir-menu')
})

menuAbrir.addEventListener('click', () => {
    menuAbrir.classList.remove('abrir-menu')
})

overlayFechar.addEventListener('click', () => {
    menuAbrir.classList.remove('abrir-menu')
})
