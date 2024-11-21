// 串

// 截取
// https://www.php.cn/faq/800127.html
const convertToSlug = (name) => {
  const res = name.slice(0, 15);
  return (res + "").toLowerCase().replaceAll(" ", "-");
};
// console.log(convertToSlug("to do list")); // "to-do-list"
// console.log(convertToSlug("My SeCond BlOg")); // "my-second-blog"
// console.log(convertToSlug("Grade inquiry of CET-4&6")); // "grade-inquiry-o"

// 喝水
// https://blog.csdn.net/qq_16313575/article/details/109542599
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
    const res1 = a1.trim().toLowerCase().replace(a1[0], a1[0].toUpperCase());
    const res2 = a2.trim().includes("ml") ? a2 : a2 + "ml";
    return res1 + " : " + res2;
  });
};

console.log(transformData(data));
