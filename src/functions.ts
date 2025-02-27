/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let C: number = (temperature - 32) * (5 / 9);
    return C;
    //return 0;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    // All 3
    if (first > 0 && second > 0 && third > 0) {
        return first + second + third;
    }

    //First + Second
    else if (first > 0 && second > 0 && third <= 0) {
        return first + second;
    }

    //First + Third
    else if (first > 0 && second <= 0 && third > 0) {
        return first + third;
    }

    //Second + Third
    else if (first <= 0 && second > 0 && third > 0) {
        return second + third;
    }

    //Just First
    else if (first > 0 && second <= 0 && third <= 0) {
        return first;
    }

    //Just Second
    else if (first <= 0 && second > 0 && third <= 0) {
        return second;
    }

    //Just Third
    else if (first <= 0 && second <= 0 && third > 0) {
        return third;
    }

    //NONE
    else if (first <= 0 && second <= 0 && third <= 0) {
        return 0;
    }

    return 0;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let upper_message: string = message.toUpperCase();
    return upper_message + "!";
    //return "";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */

//no conditionals
export function isQuestion(message: string): boolean {
    return message[message.length - 1] === "?" ? true : false;
    //return true;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word === "yes" || word === "YES") {
        return true;
    } else if (word === "no" || word === "NO") {
        return false;
    } else {
        return null;
    }
}
