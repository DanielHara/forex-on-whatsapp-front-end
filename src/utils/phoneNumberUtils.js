
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

export const isValidBrazilianNumber = (phoneNumber) => {
  let number;
  try {
    number = phoneUtil.parseAndKeepRawInput(phoneNumber, "BR");
  }
  catch (e) {
    return false;
  }

  return phoneUtil.isValidNumber(number);
};
