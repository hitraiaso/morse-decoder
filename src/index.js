const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let decimal = expr.match(/.{1,10}/g);//разбиваем по 10
  let clear = [];//расшифровка
  for (let i = 0; i <decimal.length; i++) {
      if (decimal[i] === '**********') {
         clear.push(' ');//замена разделителей на пробелы
      } 
      else {
          decimal[i] = decimal[i].replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '');//меняем цифры на знаки
          clear.push(MORSE_TABLE[decimal[i]]);//соотносим с азбукой
      };  
  } 
  return clear.join('');//делаем строку
}
  // write your solution here


module.exports = {
    decode
}