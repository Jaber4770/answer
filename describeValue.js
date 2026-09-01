function describeValue(param) {

    if (param) {
        const type = typeof param;
        const falsyTypes = [0, null, "", undefined, NaN, false];

        if (falsyTypes.includes(param)) {
            return `${type} | falsy`;
        }
        return `${type} | truthy`;

    } else {
        const type = typeof param;
        return `${type} | falsy`;
    }
}


const result = describeValue(" ");
console.log(result);