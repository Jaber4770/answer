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

const result = getCngFare(0, true);
console.log(result);