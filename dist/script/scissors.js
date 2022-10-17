const compImagesSection = document.querySelector(".computer-contener");
const compImages = document.querySelectorAll(".computer-contener__item");
const buttonsArea = document.querySelector(".buttons");
const buttonsNode = document.querySelectorAll(".buttons__item");
const humanImage = document.querySelector(".human-contener__item")
const decritpion = document.querySelector(".main-description")
const playerResultDisplay = document.querySelector(".human-result__item")
const compResultDisplay = document.querySelector(".computer-result__item")

let playerName = localStorage.getItem("playerName")
let playerResult = localStorage.getItem("playerResult") || 0;
let compResult = localStorage.getItem("compResult") || 0;

const buttons = Array.from(buttonsNode); //tablica z przycisków
const images = Array.from(compImages); //tablica ze zdjęć

let min = 0;
let max = images.length;
let counter = 0;

decritpion.textContent = `Witaj ${playerName.toUpperCase()}, ja jestem MASTABLASTA. Gramy do 5.
                          na dole ekranu wybierz swoją broń. Zobaczymy czy mnie pokonasz.`

let compResultImg =  document.createElement("img")
compResultImg.classList.add("computer-contener__item")
compImagesSection.append(compResultImg)

const gameStart = (e) => {
  let compLottery = Math.floor(Math.random() * (max - min)) + min;
  buttons.forEach((button, index) => {
    button.classList.add("block-btn")

    if (e.target === button) {
       humanPalyerImage(button)

      const iterval = setInterval(() => {
        counter += 1;
        if (counter === compImages.length) {
          counter = 0;
        }
        compImagesSection.style.transform = `translateY(${counter * -25}vw)`;
        responsive()
      }, 300);

      setTimeout(() => {
        clearInterval(iterval);
        generateLottery(compLottery);
        resultDisplay(index, compLottery)
      }, 3000);
    }
     setTimeout(()=>{
        button.classList.remove("block-btn")
     }, 3000)
  });
};

const generateLottery = (compLottery) => {
  images.forEach((img, index) => {
    if (compLottery === index) {
    let compResult = img.getAttribute("src");
      compChoise(compResult)
    }
  });
};

const compChoise = (compResult) =>{
 compResultImg.setAttribute("src", compResult)
 compImagesSection.style.transform = `translateY(${-75}vw)`
 if(window.matchMedia("(max-width: 600px)").matches){
    compImagesSection.style.transform = `translateY(${-150}vw)`
}
}

const humanPalyerImage = (button) =>{
    humanImage.setAttribute("src", button.src)
    humanImage.classList.add("open")
}

const resultDisplay = (index, compLottery) =>{

    if(index === compLottery){
        console.log('remis')
    }
    if(compLottery === 0 && index === 1){
        console.log('przegrałeś')
        compResult++
    }
    if(compLottery === 0 && index === 2){
        console.log('wygrałeś')
        playerResult++
    }
    if(compLottery === 1 && index === 0){
        console.log('wygrałeś')
        playerResult++
    }
    if(compLottery === 1 && index === 2){
        console.log('przegrałeś')
        compResult++
    }
    if(compLottery === 2 && index === 0){
        console.log('przegrałeś')
        compResult++
    }
    if(compLottery === 2 && index === 1){
        console.log('wyrgałeś')
        playerResult++
    }
    if(playerResult !== 0){
        playerResultDisplay.textContent = parseInt(playerResult);
    }
    if(compResult !== 0){
        compResultDisplay.textContent = parseInt(compResult)
    }
    if(compResult === 2){
        compResult = 0
        playerResult = 0
        playerResultDisplay.textContent = 0
        compResultDisplay.textContent = 0
    }
    if(playerResult === 2){
        playerResult = 0
        compResult = 0
        playerResultDisplay.textContent = 0
        compResultDisplay.textContent = 0
    }
    
    localStorage.setItem("playerResult", playerResult)
    localStorage.setItem("compResult", compResult)
}

    if(playerResult !== 0){
        playerResultDisplay.textContent = parseInt(playerResult);
    }
    if(compResult !== 0){
        compResultDisplay.textContent = parseInt(compResult)
    }

    const responsive = () =>{
        if(window.matchMedia("(max-width: 600px)").matches){
            compImagesSection.style.transform = `translateY(${counter * -50}vw)`
        }
    }
   
buttonsArea.addEventListener("click", gameStart);
