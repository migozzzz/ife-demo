// 1 属性排序
let shoppingList = {
  hamburger: 12,
  milk: 5,
  orange: 25,
  banana: 49,
  ipad: 10111,
};
function sumshoppingList(obj, ascendingOrder) {
  const temp = {};
  Object.entries(obj)
    .sort((a, b) => (ascendingOrder ? b[1] - a[1] : a[1] - b[1]))
    .forEach((v) => {
      temp[v[0]] = v[1];
    });
  return temp;
}
// console.log(sumshoppingList(shoppingList, true));

// 2 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function deepClone(src) {
  if (typeof src !== "object" || src === null) {
    return src;
  }
  const target = Array.isArray(src) ? [] : {};
  for (const key in src) {
    if (Object.prototype.hasOwnProperty.call(src, key)) {
      if (typeof src[key] === "object") {
        target[key] = deepClone(src[key]);
      } else {
        target[key] = src[key];
      }
    }
  }
  return target;
}

// 测试用例：
var srcObj = {
  a: 1,
  b: {
    b1: ["hello", "hi"],
    b2: "JavaScript",
  },
};
var abObj = srcObj;
var tarObj = deepClone(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a); // 1
console.log(tarObj.b.b1[0]); // "hello"
