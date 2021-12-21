// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber >= 42) {
        return (blockNumber - 42);
    } else if (blockNumber < 42){
        return (42 - blockNumber); 
    } else {
        return "try inputing a positive block number"
    }
}

function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
    if (startBlock >= endBlock) {
        return (startBlock - endBlock) * 264;
    } else if (startBlock < endBlock){
        return (endBlock - startBlock) * 264; 
    } else {
        return "try inputing a positive block number"
    }
 
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
            // subtracting the first 400 b/c its free then multiplying it by rate
            //as such num times 2 then dividing that num by a hundered to get the cents 
            //equivalent.
            const meteredFare = ((distance - 400) * 2) / 100;
            return meteredFare;
    } else if (distance > 2000 && distance < 2501) {
        return 25;
    } else if(distance > 2500){
            return "cannot travel that far"
    }
}