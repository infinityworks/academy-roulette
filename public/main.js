function highlightPeople(people, index, selectedPerson) {
    const person = people[index];
    person.classList.add('selected');
    window.setTimeout(() => {
        person.classList.remove('selected');
        if (index < people.length - 1) {
            highlightPeople(people, index + 1, selectedPerson)
        } else {
            selectedPerson.classList.add('selected');
        }
    }, 100);
}

function roulette() {
    const selectedPerson = document.querySelector('li[data-selected]');
    const people = document.getElementById('people-list').querySelectorAll('li');
    highlightPeople(people, 0, selectedPerson);
}

const goButton = document.querySelector('#go-button');
goButton.addEventListener('click', () => {
    roulette();
});
