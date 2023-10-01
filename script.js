function negotiation() {
  let name = prompt("What is your name?😃");
  let email = prompt("What is your email address?📧");
  let sport = prompt("What is your favourite sport?");
  let player = prompt("Who is your favourite sport player?");

  if (sport === "football") {
    alert(
      "Thank you " +
        name +
        "!" +
        " ,we'll be in touch via email." +
        " Cheers to football ⚽️"
    );
  } else {
    alert(
      "Thank you " + name + "!" + " ,we'll be in touch via email." + " Enjoy!"
    );
  }
}
let buyButton = document.querySelector(".sale");
buyButton.addEventListener("click", negotiation);
