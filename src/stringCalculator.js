function add(numbers) {
    if (numbers === '') {
        return 0;
    }

    // Handle custom delimiters
    if (numbers.startsWith('//')) {
        const delimiter = numbers[2];
        numbers = numbers.slice(4);
        const nums = numbers.split(new RegExp(`[,\n${delimiter}]`));
        return sumNumbers(nums);
    }

    // Default case: split on commas and new lines
    const nums = numbers.split(/[\n,]/);
    return sumNumbers(nums);
}

function sumNumbers(nums) {
    let sum = 0;
    const negatives = [];

    nums.forEach(num => {
        const number = parseInt(num, 10);
        if (number < 0) {
            negatives.push(number);
        }
        sum += number;
    });

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return sum;
}

module.exports = { add };
