const fibonacci = function(num) {
    let first = 0;
    let second = 1;

    if (typeof num === 'string') {
        num = parseInt(num);
    }

    if (num < 0) {
        return "OOPS";
    }

    if (num === 0) {
        return first;
    } else if (num === 1) {
        return second;
    } else {
        for (let i = 2; i <= num; i++) {
            const next = first + second;
            first = second;
            second = next;
        }
        return second;
    }
};

// Do not edit below this line
module.exports = fibonacci;
