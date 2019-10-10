# academy-roulette

Pick a random person from a file containing a predefined list of people.

## Dependencies

* Node 8+
* npm
* seedrandom

## Setup

The application will attempt to read in a newline-separated list of people found in a file called `people.txt` stored at the top-level directory of this project.
This file needs to be defined before using the applications and never committed to source control for privacy reasons.
Example `people.txt`:

```
Delilah
Johnny
Mark
Andrew
```

## Running

Invoke the application with

```
npm start
```

Then navigate to `http://localhost:9001` on your browser. The application will generate a new winner on page refresh, not when the "GO" button is pressed. Thus, to pick a different winner, refresh the page and press the "GO" button to run the animation again.

## Contributing

If you wish to contribute to the `academy-roulette`, fork this repo and submit a pull request with any changes you've made.

In order for your pull request to be approved, your fork should pass the automated checks. Run `npm run check` at the top-level directory (where `package.json` is located) and if no warnings or errors are printed, it's good to go!
