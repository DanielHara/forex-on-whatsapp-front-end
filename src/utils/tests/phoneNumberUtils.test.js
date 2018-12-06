import { isValidBrazilianNumber } from '../phoneNumberUtils';

describe('isValidBrazilianNumber', () => {
  const invalidNumbers = ['+11235', '23', 'whatever'];
  const validNumbers = ['+55 11 964498206', '11964498206', '551147023210'];

  it('invalid numbers', () => {
    invalidNumbers.forEach((invalidNumber) => {
      expect(isValidBrazilianNumber(invalidNumber)).toBe(false);
    });
  });

  it("valid numbers", () => {
    validNumbers.forEach((validNumber) => {
      expect(isValidBrazilianNumber(validNumber)).toBe(true);
    });
  });  
});




