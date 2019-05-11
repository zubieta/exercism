class SimpleCipher {
    readonly key: string;
    private static readonly _offset: number = 'a'.charCodeAt(0);
    private static readonly _alphaSize = 26;

    private _toCode(character: string): number {
        return character.charCodeAt(0) - SimpleCipher._offset;
    }

    private _toChar(code: number): string {
        return String.fromCharCode((code % SimpleCipher._alphaSize) + SimpleCipher._offset);
    }

    private _randomChar(): string {
        const code = Math.floor(Math.random() * SimpleCipher._alphaSize);
        return this._toChar(code);
    }

    private _mapChars(word: string, funct: (character: string, index: number) => string): string {
        return word.split('').map(funct).join('');
    }

    private _keyCode(index: number): number {
        return this._toCode(this.key[index % this.key.length]);
    }

    constructor(key?: string) {
        if (typeof key === 'undefined') {
            this.key = Array.from({ length: 100 }, () => this._randomChar()).join('');
        } else if (typeof key === 'string' && key.length > 0 && key.match(/^[a-z]+$/)) {
            this.key = key;
        } else {
            throw new Error('Bad key');
        }
    }

    encode(message: string): string {
        const ciphertext = this._mapChars(
            message,
            (l, i) => this._toChar(this._toCode(l) + this._keyCode(i))
        );
        return ciphertext;
    }

    decode(ciphertext: string): string {
        const message = this._mapChars(
            ciphertext,
            (l, i) => this._toChar(this._toCode(l) - this._keyCode(i) + SimpleCipher._alphaSize)
        );
        return message;
    }
}

export default SimpleCipher
