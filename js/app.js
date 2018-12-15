var Calculadora = {
  //Calculator elements
  //Numerical keys
  key0: document.getElementById('0'),
  key1: document.getElementById('1'),
  key2: document.getElementById('2'),
  key3: document.getElementById('3'),
  key4: document.getElementById('4'),
  key5: document.getElementById('5'),
  key6: document.getElementById('6'),
  key7: document.getElementById('7'),
  key8: document.getElementById('8'),
  key9: document.getElementById('9'),
  key_dec: document.getElementById('punto'),
  //Numerical keys end
  //Operator keys
  key_equals: document.getElementById('igual'),
  key_minus: document.getElementById('menos'),
  key_plus: document.getElementById('mas'),
  key_mult: document.getElementById('por'),
  key_div: document.getElementById('dividido'),
  //Operator keys end
  calc_display: document.getElementById('display'),
  key_on: document.getElementById('on'),
  key_sign: document.getElementById('sign'),
  keyboard: document.getElementsByClassName('tecla'),
  evalArray: [], //Array to store aritmetic functions to evaluate
  pendingVal: undefined,
  prevVal: undefined,
  currentOperator: undefined,

  //Function for handling object Calculadora click events
  updateDisplay: function(clickObj){
    var displayVal = Calculadora.calc_display.innerHTML;
    // var pendingVal;
    // var evalArray = [];
    var numKeyArray = ['0','1','2','3','4','5','6','7','8','9']; //aux array to validate numeric keys
    switch (clickObj.target.id) { //Switch handler for mouse click events
      case 'on':
        Calculadora.calc_display.innerHTML = '0';
        Calculadora.pendingVal = undefined;
        Calculadora.evalArray = [];
        Calculadora.prevVal = undefined;
        Calculadora.currentOperator = undefined;
        break;

      case 'punto':
        if (!Calculadora.calc_display.innerHTML.includes('.')) {
          displayVal += '.';
          if (displayVal.length > 8) {
            displayVal = displayVal.slice(0, 8);
          }
          Calculadora.calc_display.innerHTML = displayVal;
        }
        break;

      case 'sign':
        var minusSign;
        minusSign = Number(displayVal);
        minusSign *= -1;
        displayVal = minusSign.toString();
        if (displayVal.length > 9) {
          displayVal = displayVal.slice(0, 9);
        }
        Calculadora.calc_display.innerHTML = displayVal;
        break;

      case 'mas':
        Calculadora.currentOperator = '+';
        Calculadora.pendingVal = displayVal;
        displayVal = '';
        Calculadora.evalArray.push(Calculadora.pendingVal);
        Calculadora.evalArray.push('+');
        if (displayVal.length > 8) {
          displayVal = displayVal.slice(0, 8);
        }
        Calculadora.calc_display.innerHTML = displayVal;
        break;

      case 'menos':
        Calculadora.currentOperator = '-';
        Calculadora.pendingVal = displayVal;
        displayVal = '';
        Calculadora.evalArray.push(Calculadora.pendingVal);
        Calculadora.evalArray.push('-');
        if (displayVal.length > 8) {
          displayVal = displayVal.slice(0, 8);
        }
        Calculadora.calc_display.innerHTML = displayVal;
        break;

      case 'por':
        Calculadora.currentOperator = '*';
        Calculadora.pendingVal = displayVal;
        displayVal = '';
        Calculadora.evalArray.push(Calculadora.pendingVal);
        Calculadora.evalArray.push('*');
        if (displayVal.length > 8) {
          displayVal = displayVal.slice(0, 8);
        }
        Calculadora.calc_display.innerHTML = displayVal;
        break;

      case 'dividido':
        Calculadora.currentOperator = '/';
        Calculadora.pendingVal = displayVal;
        displayVal = '';
        Calculadora.evalArray.push(Calculadora.pendingVal);
        Calculadora.evalArray.push('/');
        if (displayVal.length > 8) {
          displayVal = displayVal.slice(0, 8);
        }
        Calculadora.calc_display.innerHTML = displayVal;
        break;

      case 'igual':
      if (Calculadora.evalArray.length < 1) {
        var currentVal = Calculadora.calc_display.innerHTML;
        Calculadora.evalArray.push(currentVal);
        Calculadora.evalArray.push(Calculadora.currentOperator);
        Calculadora.evalArray.push(Calculadora.prevVal);
        var result = eval(Calculadora.evalArray.join(' '));
        displayVal = result + '';
        if ((displayVal.length > 8)&&(displayVal.includes('-'))) {
          displayVal = displayVal.slice(0, 9);
        }
        else {
          displayVal = displayVal.slice(0, 8);
        }
        Calculadora.calc_display.innerHTML = displayVal;
        Calculadora.evalArray = [];
      } else {
        Calculadora.evalArray.push(displayVal);
        Calculadora.prevVal = displayVal;
        var result = eval(Calculadora.evalArray.join(' '));
        displayVal = result + '';
        if ((displayVal.length > 8)&&(displayVal.includes('-'))) {
          displayVal = displayVal.slice(0, 9);
        }
        else {
          displayVal = displayVal.slice(0, 8);
        }
        Calculadora.calc_display.innerHTML = displayVal;
        Calculadora.evalArray = [];
      }
        break;

      default:
        for (var i = 0; i < numKeyArray.length; i++) {
          if (clickObj.target.id === numKeyArray[i]) {
            if (displayVal==='0') {
              displayVal = '';
            }
            displayVal += clickObj.target.id;
            if (displayVal.length > 8) {
              displayVal = displayVal.slice(0, 8);
            }
            Calculadora.calc_display.innerHTML = displayVal;
          }
        }
        break;
    } //Switch handler for mouse click events ENDS
  },
};
for (var i = 0; i < Calculadora.keyboard.length; i++) {
  Calculadora.keyboard[i].addEventListener('click', Calculadora.updateDisplay, false);
}
