class GradeSchool {
    private readonly _roster: Map<string, Array<string>>;

    constructor() {
        this._roster = new Map();
    }

    addStudent(name: string, grade: number): void {
        const students = this._roster.get(grade.toString()) || [];
        students.push(name)
        this._roster.set(grade.toString(), students.sort());
    }

    studentRoster(): Map<string, Array<string>> {
        const roster = new Map();
        this._roster.forEach((_, k, __) => {
            roster.set(k, this.studentsInGrade(parseInt(k)));
        });
        return roster;
    }

    studentsInGrade(grade: number): string[] {
        return [...(this._roster.get(grade.toString()) || [])];
    }
}

export default GradeSchool;
