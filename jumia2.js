const image1=document.querySelector('.slide1')
const image2=document.querySelector('.slide2')
const image3=document.querySelector('.slide3')

let currentimage=0
window.onload=showslide
const images=[image1,image2,image3]
function showslide(){
for(let i=0; i<images.length; i++){
    images[i].style.display="none";
}

images[currentimage].style.display="block";
console.log(currentimage)
setTimeout(showslide,5000)
currentimage++

if(currentimage==3){
    currentimage=0;
}






}