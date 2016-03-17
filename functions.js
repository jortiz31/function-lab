// YOUR CODE HERE

function combineWords(word1, word2) {
  var result = word1+word2;
  console.log(result);
  return result;
}
combineWords("dog", "house");




function repeatPhrase(phrase, n) {
  for(var i = 0; i < n; i++) {
    console.log(phrase);
  }
}
repeatPhrase ("Sup", 5);




function toTheNthPower(number, power) {
  var result = 1;
  for(var i = 0; i < power; i++) {
    result *= number;
  }
  console.log(result);
  return result;
}
toTheNthPower(4, 4);




function areaOfACircle(radius) {
  var r = radius * radius;
  console.log(r);
  var area = Math.PI * r;
  console.log(area);
  return area;
}
areaOfACircle(3);




function pythagoreanTheorem(x1, y1, x2, y2) {
  var a = Math.abs(y1 - x1);
  var b = Math.abs(y2 - x2);
  var c = (a * a) + (b * b);
  c = Math.sqrt(c);
  console.log(c);
  return c;
}
pythagoreanTheorem(0,3,4,0);



function isXEvenlyDivisibleByY(x, y) {
  var result = x % y === 0;
  console.log(result);
  return result;
}
isXEvenlyDivisibleByY(98, 3);




function countVowels(word) {
  var count = 0;
  word = word.toLowerCase();
  for(var i = 0; i < word.length; i++) {
    if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
      count++;
    }
  }
  console.log(count);
  return count;
}
countVowels("jonathanortiz");




function printTriangle(length) {
  for(var i = 1; i <= length; i++) {

    var tier = '';

    for(var j = 0; j < i; j++) {
      tier += '*';
    }

    console.log(tier);
  }
}
printTriangle(3);


function printPyramid(length) {
  for(var i = 1; i <= length; i++) {
    var tier = '';

    for(var j = length - i; j > 0; j--) {
      tier += ' ';
    }
    for(var k = 0; k < i; k++) {
      tier += '* ';
    }
    console.log(tier);
  }
}
printPyramid(10);
