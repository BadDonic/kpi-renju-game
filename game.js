import fs from 'fs';

export const readInput = (filePath) =>
    fs
        .readFileSync(filePath, 'utf-8')
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0)

const getRows = (board) => {
    let rows = []
    for (let y = 0; y < board.length; y++) {
        let line = [];
        for (let x = 0; x < board[y].length; x++) {
            line.push({
                char: board[y][x],
                coordinates: { x, y }
            })
        }
        rows.push(line);
    }
    return rows;
}

const getCols = (board) => {
    let cols = []
    for (let y = 0; y < board.length; y++) {
        const line = []
        for (let x = 0; x < board[y].length; x++) {
            line.push({
                char: board[x][y],
                coordinates: { x: y, y: x }
            })
        }
        cols.push(line);
    }
    return cols;
}

const getLeftDiagonals = (board) => {
    let leftDiagonals = []
    for (let y = board.length - 1 ; y >= 0; y--) {
        let line = [];
        for (let x = 0; x < board.length - y && board[y + x][x]; x++) {
            line.push({
                char: board[y + x][x],
                coordinates: { x, y: y + x }
            })
        }
        leftDiagonals.push(line)
    }

    for (let y = board.length - 1 ; y >= 1; y--) {
        let line = [];
        for (let x = 0; x < board.length - y && board[x][y + x]; x++) {
            line.push({
                char: board[x][y + x],
                coordinates: { x, y }
            })
        }
        leftDiagonals.push(line);
    }

    return leftDiagonals;
}

const getRightDiagonals = (board) => {
    let rightDiagonals = []
    for (let y = 0; y < board.length; y++) {
        let line = []
        for (let x = 0; x < board[y].length && y >= x; x++) {
            line.push({
                char: board[y - x][x],
                coordinates: { x, y: y - x }
            })
        }
        rightDiagonals.push(line);
    }


    for (let y = board.length - 1; y >= 1; y--) {
        let line = []
        for (let x = board.length - 1; x >= 0 && board[y - x + board.length - 1]; x--) {
            line.push({
                char: board[y - x + board.length - 1][x],
                coordinates: { x: x, y: y - x + board.length - 1 }
            })
        }
        rightDiagonals.push(line);
    }

    return rightDiagonals;
}

const findWinner = (lines) => {
    for (let line of lines) {
        const str = line.reduce((acc, next) => acc + next.char, '');
        const regex = /(1+|2+)/g;

        let match;
        while ((match = regex.exec(str)) !== null) {
            if (match[0].length === 5) {
                return {
                    char: line[match.index].char,
                    coordinates: line[match.index].coordinates
                };
            }
        }
    }

    return null;
}


const input = readInput('./input.txt')
const testCases = Number(input.shift())

for (let testCase = 1; testCase <= testCases; testCase++) {
    const board = input.splice(0, 19)

    const rows = getRows(board);
    const cols = getCols(board)
    const leftDiagonals = getLeftDiagonals(board)
    const rightDiagonals = getRightDiagonals(board)

    const winner = findWinner([...rows, ...cols, ...leftDiagonals, ...rightDiagonals])

    fs.writeFileSync('./output.txt', `${winner ? `${winner.char}\n${winner.coordinates.y} ${winner.coordinates.x}` : 0}\n`, { flag: testCase === 1 ? 'w' : 'a' });
}
