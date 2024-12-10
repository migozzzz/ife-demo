//留言数据对象
const comments = [
  {
    name: "Danny",
    comment:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    time: "Thu Jan 12 2022",
  },
  {
    name: "Jackson",
    comment: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    time: "Thu Jan 11 2022",
  },
];

/**
 * @description 基于comments数据，完成渲染留言板渲染
 * @param {object[]} comments
 */
const renderComments = () => {
  let str = "";
  comments.forEach((v) => {
    str += `<hr /><h4><span>${v.name}</span><span class="date">${v.time}</span></h4><p>${v.comment}</p>`;
  });
  document.getElementById("comments").insertAdjacentHTML("afterbegin", str);
};

// 调用
renderComments();

/**
 * @description 基于comments数据，完成添加一条留言，注意安全问题
 * @param {object[]} comments
 */
const postComment = () => {
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const div1 = document.createElement("div");
  div1.textContent = name;
  const div2 = document.createElement("div");
  div2.textContent = comment;
  comments.unshift({
    name: div1.innerHTML,
    comment: div2.textContent,
    time: new Date().toLocaleString(),
  });
  renderComments();
  // document.getElementById('name')=''
  // document.getElementById('comment')=''
};

/**
 * @description 切换关闭留言和开启留言两种模式
 */
const toggleComment = () => {
  // your code here
};
