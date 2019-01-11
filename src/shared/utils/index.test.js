import {isNullOrWhitespace, isValidDate, randomArray} from './index';

// custom test
  expect.extend({
      containsNoDuplicates(items) {
        let hasDuplicates = items.reduce((acc, i) => {
          if(acc.result === true) {
              return acc;
          }
      
          return acc.dl.hasOwnProperty(i) 
            ? {result: true, dl: acc.dl}
            : {result: false, dl: Object.assign(acc.dl, { [i]: true })};        
        }, {dl: {}, result: false}).result;
  
        if (!hasDuplicates) {
          return {pass: true, message: () => `no duplicates`};
        } 
  
        return {pass: false, message: () => `array has duplicates` };
      }
    });

  
describe( 'random array tests', () => {
  test('verify the result contains only the expected elements', () => {
    expect(randomArray(6)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]))
  });

  // custom expect extension used here
  test('test of duplicates test', () => {
    expect([1,2,3]).containsNoDuplicates();
  });

   // custom expect extension used here
  test('randomArray: no duplicates', () => {
    expect(randomArray(6)).containsNoDuplicates();
  });
});
 
describe( 'isNullOrWhitespace tests', () => {
  test('blanks:', () => {
    expect(isNullOrWhitespace(' ')).toBe(true);
  });

  test('special chars:', () => {
    expect(isNullOrWhitespace('\t\r\n\v')).toBe(true);
  });

  test('empty:', () => {
    expect(isNullOrWhitespace('')).toBe(true);
  });

  test('null:', () => {
    expect(isNullOrWhitespace(null)).toBe(true);
  });

  test('undefined:', () => {
    expect(isNullOrWhitespace()).toBe(true);
  });

  test('letter:', () => {
    expect(isNullOrWhitespace('x')).toBe(false);
  });
});

describe( 'isValidDate tests', () => {
  test(' not date input', () => {
    expect(isValidDate('x')).toBe(false);
  });
  
  test(' good input', () => {
    expect(isValidDate(new Date("2017-01-26"))).toBe(true);
  });
  
  test(' bad Date', () => {
    expect(isValidDate(new Date('abc'))).toBe(false);
  });
    
  test(' empty', () => {
    expect(isValidDate()).toBe(false);
  });
});
