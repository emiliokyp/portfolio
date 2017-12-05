



function headerColor() {
  const header = document.getElementById('header'); 
  const distanceY = window.pageYOffset || document.documentElement.scrollTop
  console.log(distanceY)
  if (distanceY > 200) {
    header.classList.add("smaller");
  } else {
    header.classList.remove("smaller");
  }
}

window.addEventListener('scroll', headerColor);


function BurgerMenu() {
  const menu = document.getElementById('menu');
  const burg1 = document.getElementById('burg-1');
  const burg2 = document.getElementById('burg-2');
  const burg3 = document.getElementById('burg-3');
  menu.classList.toggle('open');
  burg1.classList.toggle('rotate-1');
  burg2.classList.toggle('none');
  burg3.classList.toggle('rotate-2');
}
