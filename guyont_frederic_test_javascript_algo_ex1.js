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

