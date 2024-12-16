function generateTable(number){
    for(let i=1;i<=10;i++){
        console.log(`${number} times ${i} = ${number*i}`);
    }
}

generateTable(2);


function getLastElements(array, n) {
    if (!Array.isArray(array)) {
        throw new Error("First argument must be an array.");
    }
    if (typeof n !== 'number' || n < 0) {
        throw new Error("Second argument must be a non-negative number.");
    }
    if (n === 0) {
        return [];
    }
    return array.slice(-n);
}

const arr = [1, 2, 3, 4, 5];
console.log(getLastElements(arr, 3));
console.log(getLastElements(arr, 10));
console.log(getLastElements(arr, 0));
