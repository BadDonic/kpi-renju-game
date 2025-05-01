
# Renju Game

This project implements a program to determine the winner of a Renju game based on a given board configuration.

## Game Rules

- Renju is played on a 19x19 board by two players.
- One player uses black stones (`1`), and the other uses white stones (`2`).
- Players alternate turns, with black always going first.
- Stones are placed on the intersections of the board's lines.
- The objective is to place **exactly five consecutive stones** of the same color horizontally, vertically, or diagonally.
- A player does not win if more than five consecutive stones of the same color are placed.

## Input Format

- The input file starts with a single integer `x` (1 ≤ x ≤ 11), representing the number of test cases.
- Each test case consists of 19 lines, each containing 19 numbers:
  - `1` for a black stone.
  - `2` for a white stone.
  - `0` for an empty intersection.

## Output Format

- For each test case:
  - Print `1` if black wins, `2` if white wins, or `0` if nobody wins yet.
  - If there is a winner, print the coordinates of the **leftmost stone** among the five consecutive stones (or the uppermost stone if vertical).

## Example

### Input
```
1
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
...
1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0
...
```

### Output
```
1
15 1
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your input data to `input.txt`.

3. Run the program:
   ```bash
   npm start
   ```

4. Check the results in `output.txt`.

## Development

To enable live reloading during development:
```bash
npm run dev
```

## Dependencies

- `fs` for file handling.
- `nodemon` for development (optional).