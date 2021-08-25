var a = 3;
var b = 2;
var c = -8;

var R1 = Math.pow(b,2) - (4*(a*c));

var R1 = Math.pow(R1,.5)

var R2 = -b - R1;

R1 = -b + R1;

R1 /= (2 * a);

R2 /= (2 * a);

console.log(R1,R2);