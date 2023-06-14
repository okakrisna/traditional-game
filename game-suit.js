const batuPlayer1 = document.querySelector(".btn-batu-player1");
const kertasPlayer1 = document.querySelector(".btn-kertas-player1");
const guntingPlayer1 = document.querySelector(".btn-gunting-player1");
const batuCom = document.querySelector(".btn-batu-com");
const kertasCom = document.querySelector(".btn-kertas-com");
const guntingCom = document.querySelector(".btn-gunting-com");
let playerPilihan = [batuPlayer1, kertasPlayer1, guntingPlayer1];
let comPilihan = [batuCom, kertasCom, guntingCom];

const resultWinner = (player, com) => {
  let pilihanPlayer = document.querySelector(".btn-batu-player1");
  let result = document.querySelector(".text-versus");
  let resultPic = document.querySelector(".resultPic");
  if (player === com) {
    result.remove(".text-versus");
    resultPic.innerHTML =
      "<img src='assets/assets/draw.png' alt='draw' class='resultPic' />";
  } else if (
    (player === "batu" && com === "gunting") ||
    (player === "kertas" && com === "batu") ||
    (player === "gunting" && com === "kertas")
  ) {
    result.remove(".text-versus");
    resultPic.innerHTML =
      "<img src='assets/assets/playerwin.png' alt='draw' class='resultPic' />";
  } else {
    result.remove(".text-versus");
    resultPic.innerHTML =
      "<img src='assets/assets/comwin.png' alt='draw' class='resultPic' />";
  }
};

playerPilihan.forEach((pilihan) => {
  pilihan.addEventListener("click", () => {
    let pilihanComAcak = comPilihan[Math.floor(Math.random() * 3)];
    const hoverBatuCom = document.querySelector(".btn-batu-com");
    const hoverKertasCom = document.querySelector(".btn-kertas-com");
    const hoverGuntingCom = document.querySelector(".btn-gunting-com");
    if (pilihanComAcak.id === "batu") {
      hoverBatuCom.style.backgroundColor = "#d3cece";
      hoverBatuCom.style.borderRadius = "10px";
    } else if (pilihanComAcak.id === "kertas") {
      hoverKertasCom.style.backgroundColor = "#d3cece";
      hoverKertasCom.style.borderRadius = "10px";
    } else {
      pilihanComAcak.id === "gunting";

      hoverGuntingCom.style.backgroundColor = "#d3cece";
      hoverGuntingCom.style.borderRadius = "10px";
    }
    resultWinner(pilihan.id, pilihanComAcak.id);
  });
});

const refreshPage = () => {
  location.reload();
};
const btnrefresh = document.querySelector(".btn-refresh-game");
btnrefresh.addEventListener("click", refreshPage);
