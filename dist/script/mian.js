const nameInput = document.querySelector(".name-enter__input")
const inputLabel = document.querySelector(".name-enter__input--label")
const paragraph = document.querySelector(".name-enter__instruction")



let playerName = localStorage.getItem("playerName") || null
const nameCheck = (e) =>{
   if(e.key === "Enter" && nameInput.value !== ''){
    playerName = nameInput.value;
    paragraph.textContent = `Witaj ${playerName.toLocaleUpperCase()}, wybierz grę dla siebie:`;
    nameInput.classList.add("hide")
    inputLabel.classList.add("hide")
   }
    localStorage.setItem("playerName", playerName);
}

if(playerName !== null){
    paragraph.textContent = `Witaj ${playerName.toLocaleUpperCase()}, wybierz grę dla siebie:`;
    nameInput.classList.add("hide")
    inputLabel.classList.add("hide")
}

nameInput.addEventListener("keypress", nameCheck)


