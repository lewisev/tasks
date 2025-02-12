/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let array: number[] = [];
    if (numbers.length >= 1) {
        const len = numbers.length;
        array = [numbers[0], numbers[len - 1]];
    }
    return array;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const array = numbers.map((num: number): number => num * 3);
    return array;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const array = numbers.map((str: string): number => {
        const parsed = parseInt(str);
        return isNaN(parsed) ? 0 : parsed;
    });
    return array;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const array = amounts.map((amt: string): number => {
        const parsed = parseInt(amt.replace("$", ""));
        return isNaN(parsed) ? 0 : parsed;
    });
    return array;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let array = messages.filter((msg) => !msg.endsWith("?")); // remove msg's ending with ?
    array = array.map((msg: string): string => {
        // set messages in all caps if ending with !
        return msg.endsWith("!") ? msg.toUpperCase() : msg;
    });
    return array;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const array = words.filter((word) => word.length < 4);
    return array.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const array = colors.filter(
        (color) => color === "red" || color === "blue" || color === "green"
    );
    return array.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) return "0=0";
    const sum = addends.reduce((current: number, num: number) => current + num);
    const expression = addends.join("+");
    return `${sum}=${expression}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let array: number[] = [];
    let sum = 0;
    const negative = values.findIndex((val: number): boolean => val < 0);
    if (negative === -1) {
        if (values.length === 0) {
            return [0];
        }
        sum = values.reduce((current: number, val: number) => current + val);
        array = [...values, sum];
    } else {
        if (negative !== 0) {
            const sliced = values.slice(0, negative);
            sum = sliced.reduce(
                (current: number, val: number) => current + val
            );
        }

        array = [...values];
        array.splice(negative + 1, 0, sum);
    }
    return array;
}
