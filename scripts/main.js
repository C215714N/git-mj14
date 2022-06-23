// Declaraciones
const d = document;
const menuBtn = d.querySelector('nav .btn');
const menuLst = d.querySelector('nav .menu');
const mapBtn = d.querySelector('#footer .btn[class*="icon"]');
const mapFrm = d.querySelector('#footer .map')


// Navegacion
menuBtn.onclick = () => { 
    menuLst.classList.toggle('active')
}

// Mapa de contacto
mapBtn.addEventListener('click', () => {
    mapFrm.classList.toggle('active') ? 
    mapBtn.classList.replace('icon-max', 'icon-min') :
    mapBtn.classList.replace('icon-min', 'icon-max') 
})