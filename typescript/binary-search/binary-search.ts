export default class BinarySearch {
    readonly array: number[];

    private static _binarySearch(value: number, array: number[]): number {
        if (array.length <= 2) {
            return array.indexOf(value);
        }
        const half = Math.floor(array.length / 2);
        if (value < array[half]) {
            return BinarySearch._binarySearch(value, array.slice(0, half));
        }
        const index = BinarySearch._binarySearch(value, array.slice(half));
        return index < 0 ? index : index + half;
    }

    private static _isSorted(array: number[]): boolean {
        return array.slice(0, array.length - 1)
            .map((e, i) => e <= array[i + 1])
            .reduce((a, b) => a && b);
    }

    constructor(array: number[]) {
        if (BinarySearch._isSorted(array)) {
            this.array = [...array];
        }
    }

    indexOf(value: number): number {
        return BinarySearch._binarySearch(value, this.array);
    }
}
