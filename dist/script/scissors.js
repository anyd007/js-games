const compImagesSection = document.querySelector(".computer-contener");
const compImages = document.querySelectorAll(".computer-contener__item")
const buttonsArea = document.querySelector(".buttons");
const buttons = document.querySelectorAll(".buttons__item")


let counter = 0;

const lottery = e =>{
    buttons.forEach((button, index)=>{
        if(e.target === button){
            const iterval =  setInterval(() => {
                counter+=1;
                if(counter === compImages.length){
                    counter = 0;
                }
                compImagesSection.style.transform = `translateY(${counter * -30}vw)`
            }, 500);
        
            setTimeout(() => {
                clearInterval(iterval)
            }, 5000);
        }
    })
}
buttonsArea.addEventListener("click", lottery)



