function describeValue(param) {

    const type = typeof param;
    if (param) {
        return `${type} | truthy`;

    } else {
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



// question 5: 
const getChaseVerdict = (target, scored, ballsLeft) => {

    const runsNeeded = target - scored;
    if (runsNeeded <= 0) {
        return "Won";
    } else if (target > scored && ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;
    if (requiredRate <= 6 && requiredRate > 0) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
    } else if (requiredRate > 6 && requiredRate <= 12) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
    } else if (requiredRate > 12) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }


};





