export const currencyFormat = (number, separator) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}

export const formatDecimalPart = (decimalPart) => {
  if (decimalPart < 10) return '0' + decimalPart.toString()
  else return decimalPart.toString()
}
