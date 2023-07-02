const btnOpenMenu=document.querySelector('#icono-menu'), 
menu = document.querySelector('#menu');

btnOpenMenu.addEventListener('click',(e)=>{
  e.preventDefault();
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');
});


function validar() {
  var input = document.getElementById("input-price");
  var valor = input.value;

  if (valor >= 0.99 && valor <= 9.99) {
    alert("El valor es válido.");
  } else {
    alert("El precio ebe estar entre $0.99 y $9.99");
  }
}
const btnGuardar = document.querySelector('.btn-final-continuar');
btnGuardar.addEventListener('click',(e)=>{
  e.preventDefault();
  validar();
  validarVacio();
});

function validarVacio() {
  var input = document.getElementById("input-price");
  var valor = input.value;

  if (valor.trim() === "") {
    alert("El campo de precio no puede estar vacío.");
  } 
}