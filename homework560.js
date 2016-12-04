// JavaScript File
function sum (n){
    var countSum = [];
    var countDruz = [];
        for (var i=200; i <= n; i++) { 
            var sum = 0;
        for (var j = 1; j <= n; j++){
            if (i%j == 0 && i!=j ){  countSum[i] = (sum += j)};
            if (countSum[j] == i && countSum[i] == j) { countDruz[i] = countSum[i]};
        }
     }
  
    return countDruz;
}
console.log(sum (300));