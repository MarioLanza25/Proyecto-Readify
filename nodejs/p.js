//const btnCrearCuenta=document.querySelector('.btn-crear-cuenta');

//const formFormulario=document.querySelector('.formulario-login');

//const btnSalirModal=document.querySelector('.modal-close');

//btnCrearCuenta.addEventListener('click',(e)=>{
  //e.preventDefault();
  //formFormulario.classList.add('formulario-login--show');
//});
//btnSalirModal.addEventListener('click',(e)=>{
  //e.preventDefault();
  //formFormulario.classList.remove('formulario-login--show');
//});

document.querySelector("#btn-iniciar-sesion").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});

