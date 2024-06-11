function capitalFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* Returns the string with a capital first letter and the rest to lowercase*/
function format(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function addPeriod(string) {
  if (string.charAt(string.length - 1) === ".") {
    return string;
  }
  return string + ".";
}

function formatWithPeriod(string) {
  return addPeriod(format(string));
}

export { capitalFirstLetter, format, addPeriod, formatWithPeriod };
