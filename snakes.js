function diceroll(){
  const dice = document.querySelector(".dice1");
  //dice.classList.add("shake");
  setTimeout(() => {
    //dice.classList.remove("shake");
    const diceValue = (Math.floor(Math.random()*6)+1);
    document.querySelector(".dice1").setAttribute("src",`dice${diceValue}.png`);},1000);
}



