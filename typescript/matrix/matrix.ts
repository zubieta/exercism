class Matrix {
    readonly rows: Array<Array<number>>;
    readonly columns: Array<Array<number>>;

    constructor(matrix: string) {
        this.rows = matrix.split('\n').map(r => r.split(' ').map(c => parseInt(c)));
        this.columns = this.rows[0].map((_, i) => this.rows.map(row => row[i]));
    }
}

export default Matrix
