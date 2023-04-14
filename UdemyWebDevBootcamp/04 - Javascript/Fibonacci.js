function fibonacciGenerator (n) {
    var output = [];
    
    if (n === 0) {
        return output;
    } else if (n === 1) {
        output.push(0);
        return output
    } else if (n === 2) {
        output.push(0);
        output.push(1);
        return output;
    } else if (n >= 3) {
        output.push(0);
        output.push(1);

        var next_int = 0;
        for (let i = 2; i < n; i++) {
            next_int = output[i-1] + output[i-2];
            output.push(next_int);
        }

        return output
    }

}

fibonacciGenerator(10)
