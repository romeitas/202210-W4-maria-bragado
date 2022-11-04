/* eslint-disable guard-for-in */
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

const createTable = () => {
    let stringTable = '<tr><th>A</th><th>B</th><th>RESULT</th></tr>';
    results.forEach((item) => {
        let fila = '<tr> <td>';
        fila += item.a;
        fila += '</td>';

        fila = '<td>';
        fila += item.b;
        fila += '</td>';

        fila = '<td>';
        fila += item.result;
        fila += '</td>';

        fila += '</tr>';
        stringTable += fila;
    });
    return stringTable;
};

document.getElementById('table').innerHTML = createTable(results);

console.log(results);
