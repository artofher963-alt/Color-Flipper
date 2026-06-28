function randomColor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll(".green, .red, .blue");
const randomBtn= document.querySelector(".random");

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
       document.body.style.backgroundColor = btn.className
    });
});


randomBtn.addEventListener("click", ()=>{
document.body.style.backgroundColor = randomColor();
});






