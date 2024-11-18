// 水仙花（三位数）
function isNar(a) {
  const len = a + "";
  let sum = 0;
  for (let i = 0; i < len.length; i++) {
    let digit = parseInt((a + "").at(i));
    sum += Math.pow(digit, 3);
  }
  if (sum === a) {
    return true;
  }
  return false;
}
