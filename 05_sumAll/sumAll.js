const sumAll = function(a,b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
    {
        return 'ERROR'
    } 
    else if(a > b){
        return sumAll(b,a)
    }
    else{
        sum = 0
        for(i = a ; i <= b ;i++){
            sum += i
        }
        return sum
    }

};

// Do not edit below this line
module.exports = sumAll;
console.log(sumAll(124,1))