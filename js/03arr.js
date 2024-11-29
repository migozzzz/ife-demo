//实现对象转换为数组
var scoreObject = {
  Tony: {
    Math: 95,
    English: 79,
    Music: 68,
  },
  Simon: {
    Math: 100,
    English: 95,
    Music: 98,
  },
  Annie: {
    Math: 54,
    English: 65,
    Music: 88,
  },
};
function objToArr(obj) {
  var arr = [];

  let count = 0;
  for (let [k, v] of Object.entries(obj)) {
    if (!arr[count]) {
      arr[count] = [];
    }
    arr[count].push(k);
    for (let v1 of Object.values(v)) {
      arr[count].push(v1);
    }
    count++;
  }

  return arr;
}
// console.log(objToArr(scoreObject));

//实现数组转换为对象
// https://www.cnblogs.com/fchx91/p/11272361.html
var menuArr = [
  [1, "Area1", -1],
  [2, "Area2", -1],
  [3, "Area1-1", 1],
  [4, "Area1-2", 1],
  [5, "Area2-1", 2],
  [6, "Area2-2", 2],
  [7, "Area1-2-3", 4],
  [8, "Area2-2-1", 6],
];
function arrToObj(arr) {
  var obj = {};

  return obj;
}
