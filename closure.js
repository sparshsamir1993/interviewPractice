function closureTest(){
    var initial = 0;
    var incr = function addNumber(){
        initial++;
        console.log(initial);
    }
    return incr;
}