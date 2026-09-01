// Question: 1
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


// Question: 2

function getDayType(param) {
    const day = param.toLowerCase();

    switch (day) {
        case "sunday":
            return "Working Day";
        case "monday":
            return "Working Day";
        case "tuesday":
            return "Working Day";
        case "wednesday":
            return "Working Day";
        case "thursday":
            return "Working Day";
        case "friday":
            return "Weekend";
        case "saturday":
            return "Weekend";
        default:
            return "Invalid Day";
    }
}


// Question: 3

function validateUsername(param) {
    const username = param.toLowerCase();

    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    if (username.includes("admin")) {
        return "Reserved Word";
    }
    return "Available"
}



// Question: 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {

    let totalFare = 0;
    if (distance <= 2 && distance > 0) {
        totalFare = 50;
    }

    if (distance > 2) {
        const remainingDistance = distance - 2;
        const first2kmFare = 50;
        const remainingKMfare = remainingDistance * 15;
        const waitingFare = waitingMinutes * 2;
        totalFare = first2kmFare + remainingKMfare + waitingFare;
    }

    if (isNight) {
        totalFare = totalFare * 1.2;
    }


    return totalFare;
}








