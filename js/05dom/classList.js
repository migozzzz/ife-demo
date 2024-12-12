//     <div id="test">hello</div>
function addClass(element, newClassName) {
  if (!element) return;
  element.classList.add(newClassName);
}

function removeClass(element, oldClassName) {
  if (!element) return;
  element.classList.remove(oldClassName);
}

function hasClass(element, className) {
  if (!element) return;
  return element.classList.contains(className);
}

function replaceClass(element, oldClassName, newClassName) {
  if (!element) return;
  if (hasClass(element, oldClassName)) {
    // element.classList.re
  }
}

// const testDom = document.getElementById("test");
// addClass(testDom, "red");
// removeClass(testDom, "green");
// console.log(hasClass(testDom, "red"));
// console.log(hasClass(testDom, "green"));
