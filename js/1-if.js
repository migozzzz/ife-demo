// 水仙花（三位数）
function isNar(a) {
  const len = a + "";
  let sum = 0;
  for (let i = 0; i < len.length; i++) {
    let digit = parseInt((a + "").at(i));
    sum += Math.pow(digit, 3);
  }
  return sum === a;
}

// 2\10进制互转(非负)
// https://codepen.io/Aimerence/pen/ELGGow?editors=1010
function tenToTwo(num) {
  let i = 0;
  const res = [];
  for (; num > 0; ) {
    res.push(num % 2);
    num = parseInt(num / 2);
    i++;
  }
  return res.reverse().join("");
}

// 99表
function fn() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(
        `<span style="width:80px;display:inline-block;">${j}*${i}=${
          j * i
        }</span>`
      );
    }
    document.write("<br/>");
  }
}
