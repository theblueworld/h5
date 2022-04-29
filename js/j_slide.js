// 滑动组件↓
window.onload = function () {
  var btns = document.getElementById("btns");
  var start_x;
  var move_x;
  var end_x;
  var v_width = document.documentElement.offsetWidth;
  var dd = document.getElementsByClassName("btn_diandian")[0];
  var cur_btn = 1;//从第一页开始
  var count_btn = btns.childElementCount;; //获取btns下子元素的个数,除去小点的
  dd.style = "display:flex;justify-content: center;";
  var d_ch = "";
  for (var i = 0; i < count_btn; i++) {
    d_ch += "<span></span>";
  }
  dd.innerHTML = d_ch;

  for (var i = 0; i < count_btn; i++) {
    dd.children[i].style =
      "display:inline-block;border-radius:8px;border:1px solid #999;width:8px;height:8px;background-color:#999;";
  }
  dd.children[0].style.backgroundColor = "red";
  function change_color(x, index) {
    //给x的第index个子元素变成红色,从0开始
    for (var i = 0; i < dd.children.length; i++) {
      if (i == index) {
        // 目标颜色变成红色
        dd.children[i].style.backgroundColor = "red";
      } else {
        // 其他颜色变成灰色
        dd.children[i].style.backgroundColor = "#999";
      }
    }
  }
  // console.log(dd);


  function transform_value(x) {
    // 页数从1开始，//0第一个；-wid第二个
    let res = -(x - 1) * document.documentElement.offsetWidth;
    return res;
  }

  btns.addEventListener("touchstart", function (e) {
    start_x = e.touches[0].screenX; //   获取点击时的x轴位置
  });

  btns.addEventListener("touchmove", function (e) {
    end_x = e.touches[0].screenX; //   获取移动时的x轴位置
    move_x = end_x - start_x; //移动后的减移动前的距离
    if (move_x > 0) {
      if (cur_btn == 1) {
        // 留在第一页，稍微前移一点
        btns.style.transform =
          "translateX(" + (transform_value(cur_btn) + 20) + "px)";
      } else {
        //向左滑动
        btns.style.transform =
          "translateX(" + (transform_value(cur_btn) + move_x) + "px)";
      }
    } else {
      if (cur_btn == count_btn) {
        // 留在最后一页，稍微后移一点
        btns.style.transform =
          "translateX(" + (transform_value(cur_btn) - 20) + "px)";
      } else {
        // 向右滑动
        btns.style.transform =
          "translateX(" + (transform_value(cur_btn) + move_x) + "px)";
      }
    }
  });

  btns.addEventListener("touchend", function (e) {
    //   console.log(e.touches);//null
    if (move_x > v_width / 3) {
      if (cur_btn == 1) {
        // 留在本页
        btns.style.transform = "translateX(" + transform_value(cur_btn) + "px)";
      } else {
        //向左跳转一页
        cur_btn--;
        change_color(dd,cur_btn-1);//小点的颜色变动
        btns.style.transform = "translateX(" + transform_value(cur_btn) + "px)";
      }
    } else if (move_x < -v_width / 3) {
      if (cur_btn == count_btn) {
        // 留在本页
        btns.style.transform = "translateX(" + transform_value(cur_btn) + "px)";
      } else {
        //向右跳转一页
        cur_btn++;
        change_color(dd,cur_btn-1);//小点的颜色变动
        btns.style.transform = "translateX(" + transform_value(cur_btn) + "px)";
      }
    } else {
      // 留在本页
      btns.style.transform = "translateX(" + transform_value(cur_btn) + "px)";
    }
  });
};
