// 串

// 截取
// 大小写转换：https://www.php.cn/faq/800127.html
const convertToSlug = (name) =>
  (name.slice(0, 15) + "").toLowerCase().replaceAll(" ", "-");
// console.log(convertToSlug("to do list")); // "to-do-list"
// console.log(convertToSlug("My SeCond BlOg")); // "my-second-blog"
// console.log(convertToSlug("Grade inquiry of CET-4&6")); // "grade-inquiry-o"

// 喝水
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

//
