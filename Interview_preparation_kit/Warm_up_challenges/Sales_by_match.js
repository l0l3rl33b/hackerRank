const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = 9;

function sockMerchant(n, ar) {
    const sockCount = {};
    let cant_pair = 0;

    // Contar la cantidad de cada tipo de calcetín
    for (const sock of ar) {
        sockCount[sock] = (sockCount[sock] || 0) + 1;
    }

    // Calcular los pares
    for (const count of Object.values(sockCount)) {
        cant_pair += Math.floor(count / 2);
    }

    return cant_pair;
}


/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 * 
 */
function countingValleys(steps, path) {
    let level = 0; // Start at sea level
    let numValleys = 0;
    let isBelowSeaLevel = false;

    for (let i = 0; i < steps; i++) {
        // Adjust the level based on the current step
        level += (path[i] === 'U') ? 1 : -1;

        // Check if we've just come up to sea level from below
        if (level === 0 && isBelowSeaLevel) {
            numValleys++;
            isBelowSeaLevel = false; // We are now at sea level, not below
        }

        // Check if we're below sea level
        if (level < 0) {
            isBelowSeaLevel = true;
        }
    }

    return numValleys;
}



// Matrix exercise

function hourglassSum(arr) {
    let max_sum_hourglasses = 0;
    for(let i=0; i<4;i++){
        for(let j=0; j<4; j++){
            let sum_hourglasses = arr[i][j]+ arr[i][j+1]+ arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j]+ arr[i+2][j+1]+ arr[i+2][j+2];
            if(i == 0 && j == 0){
                max_sum_hourglasses= sum_hourglasses;
            }else{
                max_sum_hourglasses = max_sum_hourglasses > sum_hourglasses ? max_sum_hourglasses: sum_hourglasses;
            }          
            
        }
    }
    return max_sum_hourglasses;


}

const mat1 = [
    [-1, -1,  0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, 1, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
];

const mat2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

//console.log(hourglassSum(mat1));

//Exercise por dinamycs arrays
function dynamicArray(n, queries) {
    let lastAnswer = 0;
    const result = [];
    const arr = Array.from({ length: n }, () => []);
    
    for (const query of queries) {
        const [type, x, y] = query;
        console.dir(query);
        const idx = (x ^ lastAnswer) % n;
        
        if (type === 1) {
            arr[idx].push(y);
        } else if (type === 2) {
            lastAnswer = arr[idx][y % arr[idx].length];
            result.push(lastAnswer);
        }
    }
    
    return result;
}

const mat3dynamicArray = [
    [2, 5],
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
];
