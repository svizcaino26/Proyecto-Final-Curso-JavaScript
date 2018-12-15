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

  updateDisplay: function(clickObj){
    Calculadora.calc_display.innerHTML=(clickObj)
  }
};
for (var i = 0; i < Calculadora.keyboard.length; i++) {
  Calculadora.keyboard[i].onclick = Calculadora.updateDisplay(clickObj);
}
