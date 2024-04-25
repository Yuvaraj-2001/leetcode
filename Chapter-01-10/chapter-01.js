
// Slow solution

var tribonacci = function(n){ // 4
    const a = [0,1,1];
    if( n < 4 ){
        return  n === 3 ? 2 : a[n];
    }
    for(let i = 0; i <= n - 3; i++){
        a.push(a[i] + a[i+1] + a[i+2] );  // this line keeps adding up into array 
    }
    return a[n]; 
}

// My faster solution
var tribonacci = function(n){ // 4
    
    const a = [0,1,1];
    if( n < 4 ){
        return n === 3 ? 2 : a[n];
    }
    // 4
    for(let i = 0; i <= n - 3; i++){
        console.log(i);
        a.push(a[0] + a[1] + a[2]); // on first run we are taking initial values 
        a.shift();   // once it is used, we are trimming the values, 
        //so on next loop we don't need to find bby index
    }
    return a.pop(); 
}

// Leet code Faster Solution But I don't know how it is working
var tribonacci = function (n) {
    if (n < 2) return n;
    if (n == 2) return 1;

    let t0 = 0;
    let t1 = 1;
    let t2 = 1;
    for (let i = 3; i < n + 1; i++) {
        t = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = t;
    }

    return t;
};

// LINK: https://leetcode.com/problems/n-th-tribonacci-number/