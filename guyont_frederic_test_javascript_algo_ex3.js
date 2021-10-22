function F31(A) {
    var i, j;
    for (i = 0; i < 9; i++) {
        if (F21(A[i]) == false) {
            console.log("au moins une ligne incorrecte");
            document.write('Ligne ' + (i + 1) + ' incorrecte');
            document.write(' | ');
            for (j = 0; j < 9; j++) {
                document.write(A[i][j]);
                document.write(' | ');
            }
            document.write('<br>');
            return false;
        }
    }
    console.log("toutes les lignes sont correctes");
    return true;
}

function F32(A) {
    var i, j, k;
    var col = new Array(9);
    for (j = 0; j < 9; j++) {
        for (i = 0; i < 9; i++) {
            col[i] = A[i][j];
        }
        if (F21(col) == false) {
            console.log("au moins une colonne incorrecte");
            document.write('Colonne ' + (j + 1) + ' incorrecte');
            document.write(' | ');
            for (k = 0; k < 9; k++) {
                document.write(A[k][j]);
                document.write(' | ');
            }
            document.write('<br>');
            return false;
        }
    }
    console.log("toutes les colonnes sont correctes");
    return true;
}

function F33(A) {
    var i, j, k, debutHori, debutVert, finHori, finVert, l, numero;
    var bloc = new Array(9);
    numero = 0;
    for (debutVert = 0; (debutVert + 3) <= 9; debutVert = debutVert + 3) {
        finVert = debutVert + 3;
        for (debutHori = 0; (debutHori + 3) <= 9; debutHori = debutHori + 3) {
            finHori = debutHori + 3;
            numero++;
            k = 0;
            for (j = debutVert; j < finVert; j++) {
                for (i = debutHori; i < finHori; i++) {
                    bloc[k] = A[j][i];
                    console.log(bloc[k]);
                    k++;
                }
            }

            if (F21(bloc) == false) {
                console.log("au moins un bloc incorrect");
                document.write('Bloc ' + numero + ' incorrect');
                document.write(' | ');
                for (l = 0; l < 9; l++) {
                    document.write(bloc[l]);
                    document.write(' | ');
                }
                document.write('<br>');
                return false;
            }

        }
    }
    console.log("tous les blocs corrects");
    return true;
}

function correcte() {
    if (F31(to_verify) == true && F32(to_verify) == true && F33(to_verify) == true) {
        document.write('La table est correcte');
        document.write('<br>');
    }
}

F31(to_verify);
F32(to_verify);
F33(to_verify);
correcte();



