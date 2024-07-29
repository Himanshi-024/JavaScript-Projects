const imageContainerE1 = document.querySelector(".image-container");
const prevE1 = document.querySelector(".prev");
const nextE1 = document.querySelector(".next");

let x=0;
let timer=0;

prevE1.addEventListener("click",()=>{
    x+=45;
    clearTimeout(timer);
    updateContainer();
})

nextE1.addEventListener("click",()=>{
    x-=45;
    clearTimeout(timer);
    updateContainer();
})

function updateContainer(){
    imageContainerE1.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x-=45;
        updateContainer();
    },2000);
}
updateContainer();