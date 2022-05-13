window.onload = function () {
  var btns = document.getElementById("order_nav");
  var start_x;
  var move_x;
  var end_x;
  var tran = 0; //移动后的位置
  var count_btn = btns.childElementCount; //获取order下子元素的个数,除去小点的
  var min_wid = -(
    btns.getElementsByTagName("div")[count_btn - 1].getBoundingClientRect()
      .right - document.documentElement.offsetWidth
  );

  function transform_value(x) {
    // 页数从1开始，//0第一个；-wid第二个
    let res = -(x - 1) * document.documentElement.offsetWidth;
    return res;
  }

  btns.addEventListener("touchstart", function (e) {
    start_x = e.touches[0].screenX; //   获取点击时的x轴位置
    console.log("star" + start_x);
  });

  btns.addEventListener("touchmove", function (e) {
    end_x = e.touches[0].screenX; //   获取移动时的x轴位置
    move_x = end_x - start_x + tran; //移动后的减移动前的距离

    if (move_x >= 0) {//从左向右划到顶时不动
      move_x = 0;
    } else if (move_x < min_wid) {//从右向左划到顶时不动
      move_x = min_wid;
    } else {
      // 滑动
      btns.style.transform = "translateX(" + move_x + "px)";
    }
  });

  btns.addEventListener("touchend", function (e) {
    console.log("tran" + tran);
    tran = move_x;//记录滑动结束的位置
    if (tran >= 0) {
      tran = 0;
    } else if (tran < min_wid) {
      tran = min_wid;
    }
    btns.style.transform = "translateX(" + tran + "px)";
  });
};
