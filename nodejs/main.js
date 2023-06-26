

const btnOpenModal=document.querySelector('.agregar-categoria');
const formModal=document.querySelector('.modal');
const btnSalirModal=document.querySelector('.modal-close');

btnOpenModal.addEventListener('click',(e)=>{
  e.preventDefault();
  formModal.classList.add('modal--show');
});

btnSalirModal.addEventListener('click',(e)=>{
  e.preventDefault();
  formModal.classList.remove('modal--show');
});

const btnOpenMenu=document.querySelector('#icono-menu'), 
menu = document.querySelector('#menu');

btnOpenMenu.addEventListener('click',(e)=>{
  e.preventDefault();
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');
});
