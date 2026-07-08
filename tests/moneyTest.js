import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency')
// there are two types of testing that is 1) manual testing(just check page of website) and 2) automated testing(test code by using code)
//checking by giving some scenario
console.log('converts cents into dollars');
if (formatCurrency(2095) === '20.95'){
 console.log('passed')
}else{
  console.log ('failed')
}

//2nd scenario
console.log('works with 0'); 
if (formatCurrency(0) === '0.00'){
 console.log('passed')
}else{
  console.log ('failed')
}

//3rd scenario
console.log('rounds up to the nearest cent');
if (formatCurrency(2000.5) === '20.01'){
 console.log('passed')
}else{
  console.log ('failed')
}