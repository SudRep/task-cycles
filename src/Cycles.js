export function rangeSum(start, end) {
    if (start > end) {
        return 0;
    }
    let result = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}

export function iterationCount(a) {
    let iterCount = 0;
    while (a > 0.1) {
        iterCount++;
        a /= 2;
    }
    return iterCount;
}

export function symbolsReplace(message) {
    if (message.length === 0) {
        return '';
    }

    let result = '';
    let i = 0;
    do {
        if (i % 3 === 2) {
            result += '_';
        } else {
            result += message[i];
        }
        i++;
    } while (i < message.length);

    return result;
}
