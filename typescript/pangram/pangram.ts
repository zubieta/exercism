class Pangram {

    private static readonly _alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    private readonly _is_pangram: boolean;

    constructor(phrase: string) {
        const letters = new Set(phrase.toLowerCase().split(''));
        this._is_pangram = (Pangram._alphabet
            .map(l => letters.has(l) ? 1 : 0)
            .reduce((a, b) => a + b, 0)) === 26;
    }
    isPangram(): boolean {
        return this._is_pangram;
    }

}

export default Pangram;
