function runRouletteAnimation(people, index, finalSelection, numCycles) {
    const cyclesLeft = numCycles === null ? 1 : numCycles;
    const person = people[index];
    person.classList.add('selected');
    window.setTimeout(() => {
        person.classList.remove('selected');
        if (cyclesLeft > 0) {
            const nextSelection = Math.floor(Math.random() * (people.length - 1))
            runRouletteAnimation(people, nextSelection, finalSelection, cyclesLeft - 1);
        } else {
            finalSelection.classList.add('selected');
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
    playDrumRoll()
    runRouletteAnimation(people, 0, finalSelection, 99);
}

const goButton = document.querySelector('#go-button');
goButton.addEventListener('click', () => {
    roulette();
});


playDrumRoll = function() {
    const audio = document.getElementById("drum_roll");
    audio.load()
    audio.loop = false;
    audio.play();
}