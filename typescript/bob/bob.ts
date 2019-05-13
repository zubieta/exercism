class Bob {
    hey(statement: string): string {
        const trimmed = statement.trim();
        const yelling = trimmed === trimmed.toUpperCase();
        const question = trimmed.charAt(trimmed.length - 1) === '?';
        const random = trimmed.match(/[A-Za-z]/) === null;
        const silence = trimmed === '';
        if (yelling && !question && !random) {
            return 'Whoa, chill out!';
        }
        if (yelling && question && !random) {
            return 'Calm down, I know what I\'m doing!';
        }
        if (question) {
            return 'Sure.';
        }
        if (silence) {
            return 'Fine. Be that way!';
        }
        return 'Whatever.';
    }
}

export default Bob
