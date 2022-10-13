const nameInput = document.querySelector(".name-enter__input")
const inputLabel = document.querySelector(".name-enter__label")
const paragraph = document.querySelector(".name-enter__instruction")
const navItem = document.querySelector(".nav-main__item")



let playerName = localStorage.getItem("playerName") || null
let gameItem = localStorage.getItem("gameItem") || "clouse"

const nameCheck = (e) =>{
   if(e.key === "Enter" && nameInput.value !== ''){
    playerName = nameInput.value;
    gameItem = "open"
    paragraph.textContent = `Witaj ${playerName.toLocaleUpperCase()}, wybierz grę dla siebie:`;
    nameInput.classList.add("hide")
    inputLabel.classList.add("hide")
    navItem.classList.add("open")
   }
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("gameItem", gameItem)
}

if(playerName !== null){
    paragraph.textContent = `Witaj ${playerName.toLocaleUpperCase()}, wybierz grę dla siebie:`;
    nameInput.classList.add("hide")
    inputLabel.classList.add("hide")
    gameItem = "open"
}
if(gameItem === "open"){
    navItem.classList.add("open")
}

nameInput.addEventListener("keypress", nameCheck)



