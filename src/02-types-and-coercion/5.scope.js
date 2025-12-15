// scope 0
function outer() { 
    // scope 1
    var a = 1;
    function inner() {
        // scope 2
        var b = 2;
        console.log(a + b); // 1+2
    }

    inner();

    console.log(b);
}

outer();