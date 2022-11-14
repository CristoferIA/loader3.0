 document.addEventListener("DOMContentLoaded", (e) => {
     boton();
     mensaje();

    //console.log(e);
 });

//const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");


// btn1.addEventListener('click', (e) => {
//     mensaje();    
// });


function mensaje(){
    console.log("mensaje");
}

function boton(e){
    e.addEventListener('click', (e) => {        
        console.log(e.target);
    });

    mensaje();
}

boton(document.querySelector("#btn1"));
boton(document.querySelector("#btn2"));

window.onload= (e)=>{
    load = document.querySelector(".load");
    load.classList.remove("load");
};














// const padre = document.querySelector(".padre");
// const hijo = document.querySelector(".hijo");
// const nieto1 = document.querySelector(".nieto1");
// const nieto2 = document.querySelector(".nieto2");
// const nieto3 = document.querySelector(".nieto3");
// const agregar = document.querySelector("#agregar");

// padre.addEventListener('click',(e)=>{
//    alert("padre");
//     //console.log(e.target);
// }, true);
// padre.addEventListener('click',(e)=>{
//     alert("padre");
//      //console.log(e.target);
//  });

// hijo.addEventListener('click',(e)=>{
//     alert("hijo");
// }, true);
// hijo.addEventListener('click',(e)=>{
//     alert("hijo");
// });

// nieto1.addEventListener('click',(e)=>{
//     alert("nieto1");
// });
// nieto2.addEventListener('click',(e)=>{
//     alert("nieto2");
// });
// nieto2.addEventListener('click',(e)=>{
//     alert("nieto2");
// }, true);
// nieto3.addEventListener('click',(e)=>{
//     alert("nieto3");
// });

// agregar.addEventListener('click',(e)=>{
//     padre.innerHTML += `
    
//     <div class="nieto3" >nieto3</div>
    
//     `;
// });