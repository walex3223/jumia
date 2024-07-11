const screen=document.querySelector('#screen')
const html=document.querySelector('html')
const body=document.querySelector('body')
body.onresize=check;
function check(){


    const newdate=new Date()
    const screens=window.innerWidth
    screen.innerText=newdate.getMonth()+"/"+newdate.getDate()+"/"+newdate.getFullYear()+"screensize"+screens
}
const image=document.querySelector('#advertisement')
image.children[0].id="im1"
image.children[1].id="im2"
image.children[2].id="im3"
const im1=document.querySelector('#im1')
const im2=document.querySelector('#im2')
const im3=document.querySelector('#im3')
const images=[im1,im2,im3]

current=0
body.onload=read


function read(){
    for(let i=0; i<images.length; i++){
        images[i].style.display="none"
    }
    images[current].style.display="block"
    console.log(current)
    current++
    if(current>2){
        current=0
    }
  setTimeout(read,5000)

    // for(const image of images){
    //     image.style.display="none"
    // }

    // images.forEach((item)=>{

    //     item.style.display="block"
    //     console.log(item.src)
    //     setTimeout(read,5000);
    // })
};