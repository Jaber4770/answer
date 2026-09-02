function describeValue(param) {

    const type = typeof param;
    if (param) {
        return `${type} | truthy`;

    } else {
        return `${type} | falsy`;
    }
}


const result = describeValue(NaN)
console.log(result);