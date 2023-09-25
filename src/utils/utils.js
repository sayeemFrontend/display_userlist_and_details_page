export function isMatchWith(test1, text2) {
  return test1.toLowerCase().match(text2.toLowerCase());
}

export function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

export function capitalize(str) {
  let newStr = str.slice(0, 1).toUpperCase() + str.slice(1);
  return newStr;
}
