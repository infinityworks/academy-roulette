function runRouletteAnimation(people, index, finalSelection, numCycles) {
    const cyclesLeft = numCycles === null ? 1 : numCycles;
    const person = people[index];
    person.classList.add('selected');
    window.setTimeout(() => {
        person.classList.remove('selected');
        if (index < people.length - 1) {
            runRouletteAnimation(people, index + 1, finalSelection, cyclesLeft);
        } else if (cyclesLeft > 1) {
            runRouletteAnimation(people, 0, finalSelection, cyclesLeft - 1);
        } else {
            finalSelection.classList.add('selected');
            goButton.disabled = false;
        }
    }, 100);
}

function roulette() {

    const finalSelection = document.querySelector('li[data-selected]');
    const currentSelection = document.querySelector('.selected');
    if (currentSelection) {
        currentSelection.classList.remove('selected');
    }
    const people = document.getElementById('people-list').querySelectorAll('li');

    goButton.disabled = true;
    playDrumRoll()
    runRouletteAnimation(people, 0, finalSelection, 5);
}

const goButton = document.querySelector('#go-button');
goButton.addEventListener('click', () => {
    roulette();
});

playDrumRoll = function() {
    var audio = document.getElementById("drum_roll");
    audio.load()
    audio.loop = false;
    audio.play();
}