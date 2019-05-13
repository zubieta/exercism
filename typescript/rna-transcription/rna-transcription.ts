class Transcriptor {
    toRna(dna: string): string {
        return dna.split('').map(n => {
            if (n === 'G')
                return 'C';
            else if (n === 'C')
                return 'G'
            else if (n === 'T')
                return 'A'
            else if (n === 'A')
                return 'U'
            else
                throw Error('Invalid input DNA.')
        }).join('');
    }
}

export default Transcriptor
