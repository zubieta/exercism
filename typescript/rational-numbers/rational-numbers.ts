class Rational {
    private _numerator: number;
    private _denominator: number;

    constructor(numerator: number, denominator: number) {
        this._numerator = numerator;
        this._denominator = denominator;
        this.reduce();
    }

    private static _gcd(a: number, b: number): number {
        return b === 0 ? a : Rational._gcd(b, a % b);
    }

    abs(): Rational {
        return new Rational(Math.abs(this._numerator), Math.abs(this._denominator));
    }

    add(other: Rational): Rational {
        const numerator = this._numerator * other._denominator + this._denominator * other._numerator;
        const denominator = this._denominator * other._denominator;
        return new Rational(numerator, denominator);
    }

    sub(other: Rational): Rational {
        const numerator = this._numerator * other._denominator - this._denominator * other._numerator;
        const denominator = this._denominator * other._denominator;
        return new Rational(numerator, denominator);
    }

    mul(other: Rational): Rational {
        const numerator = this._numerator * other._numerator;
        const denominator = this._denominator * other._denominator;
        return new Rational(numerator, denominator);
    }

    div(other: Rational): Rational {
        const numerator = this._numerator * other._denominator;
        const denominator = this._denominator * other._numerator;
        return new Rational(numerator, denominator);
    }

    exprational(exponent: number): Rational {
        if (exponent >= 0) {
            return new Rational(Math.pow(this._numerator, exponent), Math.pow(this._denominator, exponent));
        }
        return new Rational(Math.pow(this._denominator, Math.abs(exponent)), Math.pow(this._numerator, Math.abs(exponent)));
    }

    expreal(real: number): number {
        return parseFloat(Math.pow(real, this._numerator / this._denominator).toPrecision(16));
    }

    reduce(): Rational {
        const gcd = Rational._gcd(Math.abs(this._numerator), Math.abs(this._denominator));
        const sign = Math.sign(this._numerator * this._denominator);
        this._numerator = sign * Math.abs(this._numerator) / gcd;
        this._denominator = Math.abs(this._denominator) / gcd;
        return this;
    }
}

export default Rational;
