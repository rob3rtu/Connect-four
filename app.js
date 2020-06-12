function verif(cnt) {
    console.log(`merge col ${cnt}`);
}

//de facut matrice pt tabla
let mat = [];
for(let i = 0; i < 6; i++) {
    let v = [];
    mat.push( v );
}

let matVerif = [];
for(let i = 0; i < 6; i++) {
    let vct = [];
    matVerif.push( vct );
}
//mat de frecventa
for(let i = 0; i < 6; i++)
    for(let j = 0; j < 7; j++)
        matVerif[i][j] = 0;

//prima linie
mat[0][0] = document.getElementById('Ellipse 1');
mat[0][1] = document.getElementById('Ellipse 7');
mat[0][2] = document.getElementById('Ellipse 13');
mat[0][3] = document.getElementById('Ellipse 14');
mat[0][4] = document.getElementById('Ellipse 26');
mat[0][5] = document.getElementById('Ellipse 25');
mat[0][6] = document.getElementById('Ellipse 27');

//a doua linie
mat[1][0] = document.getElementById('Ellipse 2');
mat[1][1] = document.getElementById('Ellipse 8');
mat[1][2] = document.getElementById('Ellipse 15');
mat[1][3] = document.getElementById('Ellipse 16');
mat[1][4] = document.getElementById('Ellipse 29');
mat[1][5] = document.getElementById('Ellipse 28');
mat[1][6] = document.getElementById('Ellipse 30');

//a treia linie
mat[2][0] = document.getElementById('Ellipse 3');
mat[2][1] = document.getElementById('Ellipse 9');
mat[2][2] = document.getElementById('Ellipse 17');
mat[2][3] = document.getElementById('Ellipse 18');
mat[2][4] = document.getElementById('Ellipse 32');
mat[2][5] = document.getElementById('Ellipse 31');
mat[2][6] = document.getElementById('Ellipse 33');

//a patra linie
mat[3][0] = document.getElementById('Ellipse 4');
mat[3][1] = document.getElementById('Ellipse 10');
mat[3][2] = document.getElementById('Ellipse 19');
mat[3][3] = document.getElementById('Ellipse 20');
mat[3][4] = document.getElementById('Ellipse 35');
mat[3][5] = document.getElementById('Ellipse 34');
mat[3][6] = document.getElementById('Ellipse 36');

//a cincia linie
mat[4][0] = document.getElementById('Ellipse 5');
mat[4][1] = document.getElementById('Ellipse 11');
mat[4][2] = document.getElementById('Ellipse 21');
mat[4][3] = document.getElementById('Ellipse 22');
mat[4][4] = document.getElementById('Ellipse 38');
mat[4][5] = document.getElementById('Ellipse 37');
mat[4][6] = document.getElementById('Ellipse 39');

//a sasea linie
mat[5][0] = document.getElementById('Ellipse 6');
mat[5][1] = document.getElementById('Ellipse 12');
mat[5][2] = document.getElementById('Ellipse 23');
mat[5][3] = document.getElementById('Ellipse 24');
mat[5][4] = document.getElementById('Ellipse 41');
mat[5][5] = document.getElementById('Ellipse 40');
mat[5][6] = document.getElementById('Ellipse 42');

//de facut functia care adauga bile
let color = 0;//nr par -> galben ... nr impar -> rosu

function puneBila( nr ) {
    let i;
    nr--

    

    for(i = 5; i >= 0; i--) 
        if( mat[i][nr].innerHTML != '0' ) {
            mat[i][nr].innerHTML = '0';
            break;
        }

    console.log( i );
    
   if( i >= 0 ) {
       if( color % 2 == 0 ) {
        mat[i][nr].style.fill = 'yellow';
        matVerif[i][nr] = 1;//1 -> galben
       }
        else {
                mat[i][nr].style.fill = 'red';
                matVerif[i][nr] = 2;//2 -> rosu
           } 
           
        color++;
        if( document.querySelector('.nextTurn').innerHTML == 'yellow' )
            document.querySelector('.nextTurn').innerHTML = 'red';
        else document.querySelector('.nextTurn').innerHTML = 'yellow';

        console.log(mat[i][nr].style.fill);
   }

}

//de facut functia de verificat win
function verifica() {
    let i, j;
    let egal = true;

   eEgal: for(i = 0; i < 6; i++)
            for(j = 0; j < 7; j++)
                if( matVerif[i][j] == 0 ) {
                    egal = false;
                    break eEgal;
                }

    if( egal ){
        reset('draw');
    }else {
        //pe linii
    peLinii: for(i = 0; i < 6; i++)
    for(j = 0; j < 4; j++)
        if( matVerif[i][j] == matVerif[i][j + 1] && 
            matVerif[i][j] == matVerif[i][j + 2] && 
            matVerif[i][j] == matVerif[i][j + 3] && 
            (matVerif[i][j] == 1 || matVerif[i][j] == 2) 
          ) {
             reset( mat[i][j].style.fill );
             break peLinii;
          }

//pe coloane
peColoane: for(j = 0; j < 7; j++)
        for(i = 0; i < 3; i++)
          if( matVerif[i][j] == matVerif[i + 1][j] && 
              matVerif[i][j] == matVerif[i + 2][j] && 
              matVerif[i][j] == matVerif[i + 3][j] && 
             (matVerif[i][j] == 1 || matVerif[i][j] == 2) 
           ) {
            reset( mat[i][j].style.fill );
            break peColoane;
           }

//pe dagonale spre st
peDiagonaleSt: for(i = 0; i < 3; i++)
           for(j = 0; j < 4; j++) 
                if( 
                    matVerif[i][j] == matVerif[i + 1][j + 1] && 
                    matVerif[i][j] == matVerif[i + 2][j + 2] && 
                    matVerif[i][j] == matVerif[i + 3][j + 3] && 
                    (matVerif[i][j] == 1 || matVerif[i][j] == 2) 
                 ) {
                    reset( mat[i][j].style.fill );
                    break peDiagonaleSt;
                 }
//pe diagonale spre dr
peDiagonaleDr: for(i = 0; i < 3; i++)
            for(j = 6; j >= 3; j--)
                 if( 
                    matVerif[i][j] == matVerif[i + 1][j - 1] && 
                    matVerif[i][j] == matVerif[i + 2][j - 2] && 
                    matVerif[i][j] == matVerif[i + 3][j - 3] && 
                    (matVerif[i][j] == 1 || matVerif[i][j] == 2) 
                  ) {
                    reset( mat[i][j].style.fill );
                    break peDiagonaleDr;
                  }
    }

}

function reset(winner) {
    document.querySelector('.who').innerHTML = winner;
    document.querySelector('.message').style.display = 'block';
    document.querySelector('.message').style.backgroundColor = `${winner}`;

    if(winner == 'red')
    document.querySelector('.redScore').innerHTML = +document.querySelector('.redScore').innerHTML + 1;
    else if( winner == 'draw' ) {
        document.querySelector('.who').innerHTML = 'nobody';
        document.querySelector('.message').style.backgroundColor = 'white';
    }
    else document.querySelector('.yellowScore').innerHTML = +document.querySelector('.yellowScore').innerHTML + 1;

    setTimeout( () => {
        for(i = 0; i < 6; i++)
            for(j = 0; j < 7; j++) {
                matVerif[i][j] = 0;
                mat[i][j].innerHTML = '1';
                mat[i][j].style.fill = '#2468A4';
            }
            document.querySelector('.message').style.display = 'none';
    }, 2000 );
}

//de rezolvat cu coloanele pt desktop!!

//play button
let buton = document.querySelector('.buton');

buton.addEventListener('click', () => {
    document.querySelector('.hello').style.display = 'none';
    document.querySelector('.restart').style.display = 'block';
    document.querySelector('.board').style.display = 'block';
});

//restart button
let restartBtn = document.querySelector('.restart');

restartBtn.addEventListener('click', () => {
    let i, j;

    for(i = 0; i < 6; i++)
    for(j = 0; j < 7; j++) {
        matVerif[i][j] = 0;
        mat[i][j].innerHTML = '1';
        mat[i][j].style.fill = '#2468A4';
    }

    color = 0;
    document.querySelector('.nextTurn').innerHTML = 'yellow';

    document.querySelector('.redScore').innerHTML = 0;
    document.querySelector('.yellowScore').innerHTML = 0;
});