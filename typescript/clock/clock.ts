class Clock {
    private _hours: number;
    private _minutes: number;

    private _clock(delta: number = 0): void {
        const total_minutes = (((this._hours * 60 + this._minutes + delta) % 1440 + 1440) % 1440);
        this._hours = Math.trunc(total_minutes / 60);
        this._minutes = total_minutes % 60;
    }

    constructor(hours: number, minutes: number = 0) {
        this._hours = hours;
        this._minutes = minutes;
        this._clock();
    }

    toString(): string {
        return `${("00" + this._hours.toString()).slice(-2)}:${("00" + this._minutes.toString()).slice(-2)}`;
    }

    plus(minutes: number): Clock {
        this._clock(minutes);
        return this;
    }

    minus(minutes: number): Clock {
        this._clock(-minutes);
        return this;
    }

    equals(clock: Clock): boolean {
        return this._minutes == clock._minutes && this._hours == clock._hours;
    }
}

export default Clock;
