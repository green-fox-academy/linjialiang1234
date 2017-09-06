var test = require('tape');
var countLetterInString = require('./exercise-06');

test('count Letter in string', function (t) {
  const expectedNotString = 0;
  const actualNotString = countLetterInString([0,1,2,3,4,5,6], 'a');

  const expectedStringExist = 1;
  const actualStringExist = countLetterInString('banana', 'b');

  const expectedStringExistType2 = 2;
  const actualStringExistType2 = countLetterInString('banana', 'n');
  
  const expectedStringNotExist = 0;
  const actualStringNotExist = countLetterInString('banana', 'c');
  
  t.equal(expectedNotString, actualNotString);
  t.equal(expectedStringExist, actualStringExist);
  t.equal(expectedStringExistType2, actualStringExistType2);
  t.equal(expectedStringNotExist, actualStringNotExist);
  t.end();
})

// test('timing test', function (t) {
//     t.plan(2);

//     t.equal(typeof Date.now, 'function');
//     var start = Date.now();

//     setTimeout(function () {
//         t.equal(Date.now() - start, 100);
//     }, 100);
// });