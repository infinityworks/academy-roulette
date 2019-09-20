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

/* === Theme === */

function toggle_theme() {
    const body = document.getElementsByTagName('body')[0];
    const light_selector = theme_button.querySelector('#light');
    const dark_selector = theme_button.querySelector('#dark');

    const root_style = document.documentElement.style

    if (body.classList.contains('light')) {
        body.classList.remove('light');
        goButton.classList.remove('light');
        light_selector.classList.remove('active');
        dark_selector.classList.add('active');

        root_style.setProperty('--accent-color', '#ED6B39');


    } else {
        body.classList.add('light');
        goButton.classList.add('light');

        dark_selector.classList.remove('active');
        light_selector.classList.add('active');

        root_style.setProperty('--accent-color', '#46D396');
    }
}

const theme_button = document.getElementById('theme-button');
theme_button.addEventListener('click', toggle_theme);

