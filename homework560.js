function sum (n){  var countSum = [];
    let countDruz = [];
        for (let i=200; i <= n; i++) { 
            let sum = 0;
        for (let j = 1; j <= n; j++){
            if (i%j == 0 && i!=j ){  countSum[i] = (sum += j)}
            if (countSum[j] == i && countSum[i] == j) { countDruz[i] = countSum[i]}
        }
    }
    return countDruz;
}
console.log(sum (300));