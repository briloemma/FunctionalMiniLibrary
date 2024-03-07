console.log(isArray(['Apple', 'Orange', 'Plum']));
console.log(isBoolean(true));
console.log(isDate(new Date));
console.log(isNumber(234));
console.log(isString('234'));
console.log(isFunction(isNaN));
console.log(isUndefined(undefined));
console.log(isNull(null));


function isArray(obj) {
    return Array.isArray(obj);
}

function isBoolean(obj) {
    return typeof (obj) === 'boolean';
}

function isDate(obj) {
    return obj instanceof Date && !isNaN(obj);
}

function isNumber(obj) {
    return typeof (obj) === 'number' && !isNaN(obj);
}

function isString(obj) {
    return typeof (obj) === 'string';
}

function isFunction(obj) {
    return typeof (obj) === 'function';
}

function isUndefined(obj) {
    return typeof (obj) === 'undefined';
}

function isNull(obj) {
    return obj === null;
}
