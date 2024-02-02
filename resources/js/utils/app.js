function formatedNumber (number, format = '.') {
  const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, format);
  return formattedNumber;
}

export {
  formatedNumber
};