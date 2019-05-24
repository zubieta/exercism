class Words {
    count(words: string): Map<string, number> {
        return words.trim()
            .toLowerCase()
            .split(/\s+/)
            .reduce((m, w) => m.set(w, (m.get(w) || 0) + 1), new Map());
    }
}

export default Words;
