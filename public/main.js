function runRouletteAnimation(people, index, finalSelection, numCycles) {
    const cycles = numCycles === null ? 1 : numCycles;
    const person = people[index];
    person.classList.add('selected');
    window.setTimeout(() => {
        person.classList.remove('selected');
        if (index < people.length - 1) {
            runRouletteAnimation(people, index + 1, finalSelection, cycles);
        } else if (cycles > 0) {
            runRouletteAnimation(people, 0, finalSelection, cycles - 1);
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
    runRouletteAnimation(people, 0, finalSelection, 2);
}

const goButton = document.querySelector('#go-button');
goButton.addEventListener('click', () => {
    roulette();
});
