let a = 10;


function add(x, y) {
    console.log(x+y);
    return x + y;
    
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
module.exports = { add, sub, mul };