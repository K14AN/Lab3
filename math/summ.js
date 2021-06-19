var summ = function(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        summ += arr[i];
    }
    return summ;
}

module.exports.summ = summ;