class Squares {
    readonly squareOfSum: number;
    readonly sumOfSquares: number;
    readonly difference: number;

    constructor(n: number) {
        this.squareOfSum = n * n * (n + 1) * (n + 1) / 4;
        this.sumOfSquares = n * (n + 1) * (2 * n + 1) / 6;
        this.difference = this.squareOfSum - this.sumOfSquares;
    }
}

export default Squares;
