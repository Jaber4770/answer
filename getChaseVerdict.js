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

const check = getChaseVerdict(200, 200, 12);
console.log(check);
