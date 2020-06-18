let score = 0;

var scoreDisplay = document.getElementById('score');



var holes = Array.from(document.getElementsByClassName("hole"));



setInterval(function() {

    var randomHoleIndex = Math.floor((Math.random() * holes.length));

    holes[randomHoleIndex].classList.toggle("mole");

}, 250);



const gameArea = document.getElementById("whack-a-mole");

gameArea.addEventListener('click', function(evt) {

    if (evt.target.matches(".mole")) {

        score++;

        scoreDisplay.innerText = score;

        var click_index = holes.indexOf(evt.target);

        holes[click_index].classList.toggle("mole", false);

        // Or evt.target.classList.remove("mole");

    }

});