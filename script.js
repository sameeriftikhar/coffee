let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}



function coffee() {
    document.getElementById("sec1").style.display = "block";
    document.getElementById("sec2").style.display = "none";
    document.getElementById("sec3").style.display = "none";
    
  }
  
  function brownie() {
    document.getElementById("sec1").style.display = "none";
    document.getElementById("sec2").style.display = "block";
    document.getElementById("sec3").style.display = "none";
    
  }
  function pizza() {
    document.getElementById("sec1").style.display = "none";
    document.getElementById("sec2").style.display = "none";
    document.getElementById("sec3").style.display = "block";
    
  }
      

      
  coffee();