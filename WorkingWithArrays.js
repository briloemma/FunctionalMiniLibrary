let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(first(nums));
console.log(last(nums));
console.log(skip(nums, 5));
console.log(take(nums, 2));
console.log(asChain(nums).skip(2).take(3).value());


function first(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Invalid input');
    }
    else {
        return (arr[0]);
    }
}

function last(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Invalid input');
    }
    else {
        return arr.at(-1);
    }
}

function skip(arr, number) {
    if (!Array.isArray(arr)) {
        throw new Error('Invalid input');
    }
    else {
        let newArr = arr.slice();
        if (newArr.includes(number)) {
            return arr.filter(num => num !== number);
        }
        else {
            return newArr;
        }
    }
}

function take(arr, number) {
    if (!Array.isArray(arr)) {
        throw new Error('Invalid input');
    }
    else {
        let newArr = arr.slice(0, number);
        //newArr.push(number);
        return newArr;
    }
}

function asChain(arr) {
    return {
        skip: function (num) {
            return asChain(skip(arr, num));
        },

        take: function (num) {
            return asChain(take(arr, num));
        },

        value: function () {
            return arr.slice();
        }
    };
}
