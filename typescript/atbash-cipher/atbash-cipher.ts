class Atbashcipher {
    private _swap(character: string): string {
        if (character.match(/[0-9]/)) {
            return character;
        }
        const code = 25 - character.charCodeAt(0) + 2 * 'a'.charCodeAt(0);
        return String.fromCharCode(code);
    }

    encode(input: string): string {
        return input.toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .split('')
            .map(this._swap)
            .map((c, i) => i % 5 ? c : ' ' + c)
            .join('')
            .trim();
    }

    decode(input: string): string {
        return input.split('')
            .filter(c => c.match(/[^\s]/))
            .map(this._swap)
            .join('');
    }
}

export default Atbashcipher;
