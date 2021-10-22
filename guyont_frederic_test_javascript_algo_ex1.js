//import { array_number } from './javascript_test_je1.js';

var array_number = new Array(9);
array_number[0] = "4 2 7 3 5 1 9 8 6";
array_number[1] = "9 8 3 7 6 2 5 1 4";
array_number[2] = "1 5 6 8 9 4 7 2 3";
array_number[3] = "2 3 9 1 8 5 4 6 7";
array_number[4] = "7 4 1 6 3 9 2 5 8";
array_number[5] = "5 6 8 2 4 7 1 3 9";
array_number[6] = "8 7 2 9 1 3 6 4 5";
array_number[7] = "3 9 5 4 2 6 8 7 1";
array_number[8] = "6 1 4 5 7 8 3 9 6";

var to_verify = new Array(9);
for (var i = 0; i < 10; i++) {
    to_verify[i] = new Array(9);
}

function F11() {
    var i, j, k;
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (j != 0) {
                k = j * 2;
            }
            else {
                k = 0;
            }
            to_verify[i][j] = array_number[i][k];
        }
    }
}

F11();

function F12() {
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            document.write(to_verify[i][j]);
            document.write(' | ');
        }
        document.write('<br>');
    }
}

F12();

