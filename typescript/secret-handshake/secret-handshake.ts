class HandShake {
    private _commands: string[];

    constructor(value: number) {
        if (value < 0 || value > 31) {
            throw Error('Value out of range.');
        }
        this._commands = [];
        if (value & 1)
            this._commands.push('wink');
        if (value & 2)
            this._commands.push('double blink');
        if (value & 4)
            this._commands.push('close your eyes');
        if (value & 8)
            this._commands.push('jump');
        if (value & 16)
            this._commands.reverse();
    }

    commands(): string[] {
        return this._commands;
    }

}

export default HandShake;
