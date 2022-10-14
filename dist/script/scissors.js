const compImagesSection = document.querySelector(".computer-contener");
const compImages = document.querySelectorAll(".computer-contener__item");
const buttonsArea = document.querySelector(".buttons");
const buttonsNode = document.querySelectorAll(".buttons__item");

const buttons = Array.from(buttonsNode);
const images = Array.from(compImages);
let min = 0;
let max = images.length;
let counter = 0;

let resultImg =  document.createElement("img")
resultImg.classList.add("computer-contener__item")
compImagesSection.append(resultImg)

const lottery = (e) => {
  let lottery = Math.floor(Math.random() * (max - min + 1)) + min;
  buttons.forEach((button, index) => {
    if (e.target === button) {
      const iterval = setInterval(() => {
        counter += 1;
        if (counter === compImages.length) {
          counter = 0;
        }
        compImagesSection.style.transform = `translateY(${counter * -30}vw)`;
      }, 300);

      setTimeout(() => {
        clearInterval(iterval);
        generateLottery(lottery);
      }, 3000);
    }
  });
};

const generateLottery = (lottery) => {
  images.forEach((img, index) => {
    if (lottery === index) {
    let result = img.getAttribute("src");
      showReslut(result)
    }
  });
};

const showReslut = (result) =>{
 resultImg.setAttribute("src", result)
 compImagesSection.style.transform = `translateY(${-90}vw)`
 console.log(result)
}
buttonsArea.addEventListener("click", lottery);
