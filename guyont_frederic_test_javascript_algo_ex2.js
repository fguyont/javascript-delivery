function F21(A) {
    var i, j;
    if (A.length != 9) {
        console.log("pas 9 éléments");
        return false;
    }
    for (i = 0; i < 9; i++) {
        if ((A[i] < 1 || A[i] > 9) || (isNaN(A[i]) == true)) {
            console.log("pas que des chiffres");
            return false;
        }
        for (j = 0; j < 9; j++) {
            if (i != j && (A[i] == A[j])) {
                console.log("au moins deux éléments égaux");
                return false;
            }
        }
    }
    console.log("bien");
    return true;
}

var A = [1, 2, 5, 3, 8, 7, 4, 6, 9];
F21(A);

var B = [1, 2, 5, 9, 8, 7, 4, 9];
F21(B);

var C = [1, 2, 5, 3, 'a', 8, 7, 4, 9];
F21(C);

var D = [1, 2, 5, 9, 8, 7, 4, 9, 1];
F21(D);