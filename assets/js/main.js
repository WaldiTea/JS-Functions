//---------- lev1_1 ----------
console.log('---------- lev1_1 ----------');

function intro() {
  let a = 1 + 3;
  console.log('Hello World');
  console.log('1+3 = ' + a);
}

intro();


//---------- lev1_2 ----------
console.log('---------- lev1_2 ----------');

function intro2(paramName) {
  let varName = 'SuperCoder';
  console.log('Hi, ' + varName + '. Mein Name ist ' + paramName + '.');
}

intro2('Waldi');


//---------- lev1_3 ----------
console.log('---------- lev1_3 ----------');

function intro3(name, stadt, alter) {
  console.log('Hallo, mein Name ist ' + name + '. Ich bin ' + alter + ' Jahre alt. Ich komme aus ' + stadt + '.');
}

intro3('SuperCoder', 'Düsseldort', 27);


//---------- lev1_5 ----------
console.log('---------- lev1_5 ----------');

function math(x, y) {
  console.log(x * y);
  console.log(x / y);
}

math(30, 20);
math(10, 2);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);