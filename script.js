var number = +prompt('enter a testing number'); // asks the number for checking from user

var checkTruePow = function calcTruePow( num ){ // activation of function, that checks is the number a true pow of 2

    if( num == 1 || num%2 != 0 ) {  // divides the number by 2 until it will be 1 or not integer, that module by 2 is 0

        return   +!(num - num%2);

    } else {

        return calcTruePow( num/2 );

        }


    }



alert( checkTruePow( number ) );// types the result;

//-----------------------------the second variant ( not for HW condition)---------------------------------

//
// var number = +prompt('enter a testing number');// asks the number for checking from user
//
// function calcTruePow( powNum ){
//
//     return (powNum%2 == 0) ? 2*calcTruePow(powNum/2) : 1;// divides by 2 the number until it integer then via stack
//                                                         // calculate the real true pow of 2
//
// }
//
// function checkTruePow( num ) {
//
//     if (calcTruePow( num ) == num ){// activation of function, that calculate the real true pow of 2
// return 1;
// }else{
//     return 0;
// }
//
// }
//
// alert( checkTruePow(number) );// activation of function, that checks is the number a true pow of 2
//



