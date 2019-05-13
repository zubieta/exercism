class SpaceAge {
    readonly seconds: number;

    private _toYears(constant: number): number {
        return Math.round(100 * this.seconds / 31557600 / constant) / 100;
    }

    constructor(seconds: number) {
        this.seconds = seconds;
    }

    onEarth(): number {
        return this._toYears(1);
    }

    onMercury(): number {
        return this._toYears(0.2408467);
    }

    onVenus(): number {
        return this._toYears(0.61519726);
    }

    onMars(): number {
        return this._toYears(1.8808158);
    }

    onJupiter(): number {
        return this._toYears(11.862615);
    }

    onSaturn(): number {
        return this._toYears(29.447498);
    }

    onUranus(): number {
        return this._toYears(84.016846);
    }

    onNeptune(): number {
        return this._toYears(164.79132);
    }
}

export default SpaceAge;
