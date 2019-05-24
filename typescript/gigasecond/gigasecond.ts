class Gigasecond {
    private readonly _date: Date;

    constructor(date: Date) {
        this._date = new Date(date.valueOf() + 10 ** 12);
    }

    date(): Date {
        return this._date;
    }
}

export default Gigasecond;
