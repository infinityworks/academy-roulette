# academy-roulette

Pick a random person from a file containing a predefined list of people.

## Dependencies

* Node 8+

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
node index.js
```

Then navigate to `http://localhost:9001` on your browser. The application will generate a new winner on page refresh, not when the "GO" button is pressed. Thus, to pick a different winner, refresh the page and press the "GO" button to run the animation again.
