window.onload = function () {
  var sendBtn = document.getElementById("sendBtn");
  var loginBtn = document.getElementById("loginBtn");
  var phone = document.getElementById("phone");
  var smscode = document.getElementById("smscode");
  var agree = document.getElementById("agree");

  //120秒周期只能有一次有效请求单击事件 启动之后 120 标志位

  var is_sending = false;

  sendBtn.addEventListener(
    "click",
    function () {
      //当前是否正在发送
      if (is_sending) return true;
      //验证手机号码是否合法
      let phoneVal = phone.value.trim(); //去掉前后空格
      //js正则表达式
      if (!phoneVal || !/^1[3456789]\d{9}$/.test(phoneVal)) {
        alert("请输入正确的手机号码");
        return false;
      }

      //请求发送 AJAX  Fetch  Axios

      //发送成功后倒计时
      is_sending = true;
      cutDown();
    },
    false
  );

  var timeout = 120;
  function cutDown() {
    //每隔多长时间执行回调方法
    var timerId = setInterval(function () {
      if (timeout < 0) {
        sendBtn.innerText = "重新发送";
        sendBtn.style.backgroundColor = "#5F99F1";
        sendBtn.style.color = "#111";
        timeout = 120;
        is_sending = false;
        clearInterval(timerId);
      } else {
        sendBtn.innerText = "倒计时" + timeout + "秒";
        timeout--;
        sendBtn.style.backgroundColor = "#DEDEDE";
        sendBtn.style.color = "#fff";
      }
    }, 1000);
  }

  //手机号码合法 短信验证码有输入  有同意注册协议

  smscode.addEventListener(
    "input",
    function () {
      loginBtn.classList.remove("active");

      let phoneVal = phone.value.trim(); //去掉前后空格
      //js正则表达式
      if (!phoneVal || !/^1[3456789]\d{9}$/.test(phoneVal)) {
        return false;
      }

      if (this.value.length == 6 && agree.checked == true) {
        //console.log("高亮按钮  可以登录操作")
        loginBtn.classList.add("active");
      }
    },
    false
  );

  agree.addEventListener(
    "click",
    function () {
      //this   agree
      loginBtn.classList.remove("active");

      let phoneVal = phone.value.trim(); //去掉前后空格
      //js正则表达式
      if (!phoneVal || !/^1[3456789]\d{9}$/.test(phoneVal)) {
        return false;
      }

      if (smscode.value.length == 6 && agree.checked == true) {
        loginBtn.classList.add("active");
        //console.log("高亮按钮  可以登录操作")
      }
    },
    false
  );
};
