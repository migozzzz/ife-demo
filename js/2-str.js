// 1串

// 2截取
// 大小写转换：https://www.php.cn/faq/800127.html
const convertToSlug = (name) =>
  (name.slice(0, 15) + "").toLowerCase().replaceAll(" ", "-");
// console.log(convertToSlug("to do list")); // "to-do-list"
// console.log(convertToSlug("My SeCond BlOg")); // "my-second-blog"
// console.log(convertToSlug("Grade inquiry of CET-4&6")); // "grade-inquiry-o"

// 3喝水
// 首字母转大写：https://blog.csdn.net/qq_16313575/article/details/109542599
// 提取数字：https://blog.csdn.net/weixin_44953227/article/details/102727922
const data = [
  "monday - 500ml",
  "mONday - 330",
  "monday - 150ml",
  "Tuesday - 100ml",
  "Tuesday - 330ml",
  "weDnesDay - 230",
  "TursDAy - 330ml",
  "Friday - 500",
  "Saturday - 100ml",
  "sunday - 250",
  "sunday - 100ml",
];
const transformData = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((v) => {
    const [a1, a2] = v.split("-");
    const temp = a1.trim().toLowerCase();
    const res1 = temp.replace(temp[0], temp[0].toUpperCase());
    const res2 = a2.trim().includes("ml") ? a2 : a2 + "ml";
    return res1 + " : " + res2;
  });
};
const query = (day, d = data) => {
  const q = day.toLowerCase().trim();
  const res = transformData(d).filter((v) =>
    v.split(":")[0].toLowerCase().includes(q)
  );
  return res.map((v) => v.replace(":", "-"));
};
const countWater = (day, arr) => {
  const total = arr.reduce((prev, cur) => {
    const num = cur.replace(/[^0-9]/gi, "");
    return prev + +num;
  }, 0);
  if (total < 500) {
    console.log(`您在星期 ${day.trim().toUpperCase()} 的饮水量没有达标！`);
    return;
  }
  console.log(`您在星期 ${day.trim().toUpperCase()} 的饮水量达标啦！`);
};
// const search1 = query(" Tuesday   "); // ["Tuesday - 100ml","Tuesday - 330ml"]
// const search2 = query("Friday"); // ["Friday - 500ml"]
// console.log(search1, countWater(" Tuesday   ", search1));
// console.log(search2, countWater("Friday", search2));

//4去掉字符串str中，连续重复的地方
// https://www.cnblogs.com/zyc-zsxbh/p/9327364.html
function removeRepetition(str) {
  let result = "";
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[0] === str[1]) {
      str = str.slice(1);
    } else {
      result = result + str[0];
      str = str.slice(1);
    }
  }
  return result;
}
// console.log(removeRepetition("aaa")); // ->a
// console.log(removeRepetition("abbba")); // ->aba
// console.log(removeRepetition("aabbaabb")); // ->abab
// console.log(removeRepetition("")); // ->
// console.log(removeRepetition("abc")); // ->abc

// 5回文
// https://blog.csdn.net/weixin_52326756/article/details/140946880
function isPalindromicString(str) {
  if (!str) return false;
  const normalizedStr = str.replace(/\s/g, "").toLowerCase();
  let left = 0;
  let right = normalizedStr.length - 1;
  while (left < right) {
    if (normalizedStr[left] !== normalizedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// console.log(isPalindromicString("aaa")); // ->true
// console.log(isPalindromicString("madam")); // ->true
// console.log(isPalindromicString("hello")); // ->false

// 6凯撒加密
// https://www.cnblogs.com/05-hust/p/15576059.html

// 7打字机
// demo：https://blog.csdn.net/tencentes/article/details/138874636
{
  /* <label>请输入文本:</label><input type="text" />
<button onclick="generateTypeEffect()">生成打字效果</button>
<h2 id="showText"></h2> */
}
function generateTypeEffect() {
  const txt = document.getElementsByTagName("input")[0];
  const source = txt.value;
  if (!source.length) return;
  let count = 0;
  const interval = setInterval(() => {
    const id1 = document.getElementById("showText");
    if (count < source.length) {
      id1.innerHTML += source[count];
      count += 1;
    } else {
      id1.innerHTML = "";
      count = 0;
    }
  }, 100);
}
