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

// 2 深拷贝：被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
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

// 3 利用通过 Object.defineProperty()来实现简易的双向数据绑定
{
  /* <label>姓名:</label>
<input type="text" class="name" onchange="changeName()" />
<button onclick="changeInput()">恢复姓名为rose</button> */
}
//利用通过 Object.defineProperty()来实现简易的双向数据绑定
// 会出现无限递归的问题。
// 还可：1修改person={_name:''}、2或新增isSetting变量
var person = { name: "" };
function changeName() {
  person.name = document.getElementsByTagName("input")[0].value;
}
Object.defineProperty(person, "name", {
  get() {
    return this._name; // 避免无限递归，新增属性。
  },
  set(val) {
    this._name = val;
    document.getElementsByTagName("input")[0].value = val;
    console.log(person.name);
  },
});
function changeInput() {
  person.name = "rose";
}
// GPT4
// 定义一个全局标志来防止递归
// var person = { name: "" };
// var isSetting = false;
// function changeName() {
//   if (isSetting) return;
//   person.name = document.getElementsByTagName("input")[0].value;
// }
// Object.defineProperty(person, "name", {
//   get() {
//     return this._name || "";
//   },
//   set(val) {
//     if (this._name === val) return;
//     this._name = val;
//     isSetting = true;
//     document.getElementsByTagName("input")[0].value = val; // 更新输入框的值
//     isSetting = false;
//     console.log("姓名更新为:", this._name);
//   },
// });
// function changeInput() {
//   person.name = "rose";
// }
