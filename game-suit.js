const batuPlayer1 = document.querySelector(".btn-batu-player1");
const kertasPlayer1 = document.querySelector(".btn-kertas-player1");
const guntingPlayer1 = document.querySelector(".btn-gunting-player1");
const batuCom = document.querySelector(".btn-batu-com");
const kertasCom = document.querySelector(".btn-kertas-com");
const guntingCom = document.querySelector(".btn-gunting-com");
let pilihanPlayer = [batuPlayer1, kertasPlayer1, guntingPlayer1];
let pilihanCom = [batuCom, kertasCom, guntingCom];

pilihanPlayer.forEach((pilihan) => {
  pilihan.addEventListener("click", () => {
    let pilihanComAcak = pilihanCom[Math.floor(Math.random() * 3)];

    if (pilihanComAcak === batuCom) {
      const hoverBatuCom = document.querySelector(".btn-batu-com");
      hoverBatuCom.style.backgroundColor = "#d3cece";
      hoverBatuCom.style.borderRadius = "10px";
      setTimeout(() => {
        hoverBatuCom.style.backgroundColor = "";
        hoverBatuCom.style.borderRadius = "";
      }, 3000);
    } else if (pilihanComAcak === kertasCom) {
      const hoverKertasCom = document.querySelector(".btn-kertas-com");
      hoverKertasCom.style.backgroundColor = "#d3cece";
      hoverKertasCom.style.borderRadius = "10px";
      setTimeout(() => {
        hoverKertasCom.style.backgroundColor = "";
        hoverKertasCom.style.borderRadius = "";
      }, 3000);
    } else {
      pilihanComAcak === guntingCom;
      const hoverGuntingCom = document.querySelector(".btn-gunting-com");
      hoverGuntingCom.style.backgroundColor = "#d3cece";
      hoverGuntingCom.style.borderRadius = "10px";
      setTimeout(() => {
        hoverGuntingCom.style.backgroundColor = "";
        hoverGuntingCom.style.borderRadius = "";
      }, 3000);
    }
    //console.log(pilihan);
    //console.log(pilihanComAcak);
  });
});

const resultWinner1 = (player, com) => {
  if (pilihanPlayer === pilihanCom) {
    console.log("draw");
  } else if (
    (player === "batu" && com === "gunting") ||
    (player === "kertas" && com === "batu") ||
    (player === "gunting" && com === "kertas")
  ) {
    alert("win");
  }
};
