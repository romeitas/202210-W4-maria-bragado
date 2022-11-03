import strictEquals from './strictEquals.js';

const results = [
    { a: 1, b: 1, result: strictEquals(1, 1) },
    { a: NaN, b: NaN, result: strictEquals(NaN, NaN) },
    { a: 0, b: -0, result: strictEquals(0, -0) },
    { a: -0, b: 0, result: strictEquals(-0, 0) },
    { a: 1, b: '1', result: strictEquals(1, '1') },
    { a: true, b: false, result: strictEquals(true, false) },
    { a: false, b: false, result: strictEquals(false, false) },
    { a: 'water', b: 'oil', result: strictEquals('water', 'oil') },
];

console.log(results);
