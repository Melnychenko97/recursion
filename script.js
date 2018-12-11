var number = +prompt('enter a testing number'); // asks the number for checking from user

var checkTruePow = function calcTruePow( num ) { 

      return ( num == 1 || num%2 != 0 ) ? +!(num - num%2) : calcTruePow( num/2 );
    }

alert( checkTruePow( number ) );// types the result;