// ==UserScript==
// @name        zhihu-reminder
// @namespace   zhangboyang.id@gmail.com
// @include     https://www.zhihu.com/*
// @version     1
// @grant       none
// ==/UserScript==


(function () {
  let remind_later;
  let timeout_orig = 60 * 1000;
  let timeout = timeout_orig;
  let timeout_limit = 5 * 1000;
  
  function reminder()
  {
    let s = prompt("真的要刷知乎吗？\n输入 yes 来继续刷知乎。");
    if (s == "reset") {
      if (prompt("真的要重置计时器吗？") == "reset" && prompt("你的良心不会痛吗？") == "reset") {
        timeout = timeout_orig;
        remind_later();
      } else {
        reminder();
        return;
      }
    } else if (s != "yes") {
      window.location.href = "about:blank";
    } else {
      remind_later();
    }
  }
  
  remind_later = function () { 
    setTimeout(reminder, timeout);
    if (timeout / 2 >= timeout_limit) {
      timeout /= 2;
    } else {
      timeout = timeout_limit;
    }
  };
  
  reminder();
})();

