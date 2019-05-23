export class WordProblem {
    private readonly _question: string;

    constructor(question: string) {
        this._question = question;
    }

    answer(): number {
        const components = this._question
            .slice(8)
            .slice(0, -1)
            .replace(/plus/g, '+')
            .replace(/minus/g, '-')
            .replace(/multiplied by/g, '*')
            .replace(/divided by/g, '/')
            .split(' ');
        const expr = '('.repeat(components.length / 2)
            + components.reduce((s, c, i) => s + ' ' + c + (i % 2 ? '' : ')'));
        try {
            return eval(expr);
        }
        catch (error) {
            throw new ArgumentError();
        }
    }
}

export class ArgumentError extends Error { }
