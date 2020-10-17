module.exports = function check(str, bracketsConfig) {

  let len = bracketsConfig.length;

  for (let i = 0; i < len;) {

    let pair = bracketsConfig[i].join('');

    if (str.includes(pair)) {
      str = str.replace(pair, '');
      i = 0;
    } else {
      i++;
    }
  }

  return str.length == 0 ? true : false;
  
}
