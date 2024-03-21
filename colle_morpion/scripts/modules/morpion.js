export function Morpion()
{
    const cells = document.getElementById("grid");
    const cp = document.getElementsByTagName("div")[0];
    const player1 = 'X';
    const player2 = 'O';
    let currentPlayer = player1;

    const newgame = document.getElementById("replay");
    newgame.addEventListener("click", replay);

        cells.onclick = function(event)
        {

            var target = event.target;

            target.innerHTML = currentPlayer;

            if (currentPlayer == player1)
            {
                cp.innerHTML = "Joueur 1";
                currentPlayer = player2;
            }
            else
            {
                cp.innerHTML = "Joueur 2";
                currentPlayer = player1;
            }

        };

        function replay()
        {
            let i = 0;

            while (i < 9)
            {
               document.getElementsByClassName("cell")[i].innerHTML = "";
               i++;
            }
        }
};