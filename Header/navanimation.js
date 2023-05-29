
console.log("begin");

function Navanimation(a){
  const logo = document.querySelector("#logo");
  const navlinks = document.querySelector("#nav-links");
  navlinks.setAttribute("style","opacity:1");
  logo.setAttribute("style","opacity:1");
  console.log("Works");
}

setTimeout(Navanimation,4000);
console.log("finish");


