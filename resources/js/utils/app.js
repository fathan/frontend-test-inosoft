function formatedNumber (number, format = '.') {
  const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, format);
  return formattedNumber;
}

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export {
  formatedNumber,
  sleep
};