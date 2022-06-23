// Declaraciones
const d = document;
const menuBtn = d.querySelector('nav .btn');
const menuLst = d.querySelector('nav .menu');
const mapBtn = d.querySelector('#footer .btn[class*="icon"]');
const mapFrm = d.querySelector('#footer .map')


// Navegacion
const toggleMenu = () => {
    menuLst.classList.toggle('active') ?
    menuBtn.innerHTML = '&times;' :
    menuBtn.innerHTML = '&equiv;'
}

menuBtn.onclick = toggleMenu()

// Mapa de contacto
const toggleMap = () => {
    mapFrm.classList.toggle('active') ? 
    mapBtn.classList.replace('icon-max', 'icon-min') :
    mapBtn.classList.replace('icon-min', 'icon-max') 
}

mapBtn.addEventListener('click', toggleMap );