export function calculateWinner(cell) {
    const lines = [
        [0, 1, 2],
        [3, 4, 6],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let index = 0; index < lines.length; index++) {
        const [a, b, c] = lines[index];
        if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
            return cell[a]
        }
    }
    return null;
}
