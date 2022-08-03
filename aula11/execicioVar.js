let A = 'A';
let B = 'B';
let C = 'C';

//                    Primeiro jeito de resolver.
// let aux = A;
// A = C;
// C = B;
// B = aux;

// console.log(A, B, C);

[A, B, C] = [C, A, B]

console.log(A, B, C);