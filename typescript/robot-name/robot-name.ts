class RobotName {
    name: string;

    private _old_names: Set<string>;

    private static _randint(min: number = 0, max: number = 9): number {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    private static _randchar(): string {
        return String.fromCharCode(RobotName._randint(65, 90));
    }

    private static _name() {
        return (RobotName._randchar() + RobotName._randchar()
            + RobotName._randint().toString() + RobotName._randint().toString()
            + RobotName._randint().toString());
    }

    constructor() {
        this._old_names = new Set();
        this.name = RobotName._name();
    }

    resetName() {
        this._old_names.add(this.name);
        while (this._old_names.has(this.name)) {
            this.name = RobotName._name();
        }
    }
}

export default RobotName;
