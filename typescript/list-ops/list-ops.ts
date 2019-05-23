class List<T = number> {
    readonly values: T[];

    constructor(list: T[] = []) {
        this.values = [...list];
    }

    append(list: List<T>): List<T> {
        return new List<T>([...this.values, ...list.values]);
    }

    concat(lists: List<List<T>>): List<T> {
        return lists.foldl((acc, list) => acc.append(list), new List<T>());
    }

    filter(condition: (el: T) => boolean): List<T> {
        return new List(this.foldl((acc: T[], value: T) => {
            if (condition(value)) {
                acc.push(value);
            }
            return acc;
        }, []));
    }

    length(): number {
        return this.foldl((a) => a + 1, 0);
    }

    map<U>(mapper: (el: T) => U): List<U> {
        return new List(this.foldl((acc: U[], value: T) => {
            acc.push(mapper(value));
            return acc;
        }, []));
    }

    foldl<U>(folder: (acc: U, el: T) => U, initial: U): U {
        let accumulator = initial;
        for (const value of this.values) {
            accumulator = folder(accumulator, value);
        }
        return accumulator;
    }

    foldr<U>(folder: (acc: U, el: T) => U, initial: U): U {
        return this.reverse().foldl(folder, initial);
    }

    reverse(): List<T> {
        return new List(this.foldl((acc: T[], value: T) => {
            acc.unshift(value);
            return acc;
        }, []));
    }
}

export default List;
