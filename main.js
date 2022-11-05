function creatGame(player1, hour, player2){
    return `
    <li>
    <img src="./imagens/icon=${player1}.svg" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="./imagens/icon=${player2}.svg" alt="Bandeira da ${player2}"/>
    </li>
    `
}

let delay = -0.4;
function creatCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span> </h2>
            <ul>
              ${games} 
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 

      creatCard("20/11", "Domingo",
      creatGame("qatar", "13:00", "ecuador") 
      ) +

      creatCard("21/11", "segunda",
      creatGame("england", "10:00", "iran") + creatGame("senegal","13:00","netherlands")
      ) +
   
       creatCard("24/11", "quinta",
         creatGame("brazil", "16:00", "serbia") + creatGame("","","")
       ) +
       creatCard("28/11", "segunda",
       creatGame("brazil", "13:00", "switzerland") + creatGame("portugal", "16:00", "uruguay") 
       ) +
       creatCard("02/12", "sexta",
       creatGame("brazil", "16:00", "cameroon")
       )
 
