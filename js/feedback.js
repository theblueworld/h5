window.onload = function () {
    $("#upload_btn2").click(function(){
    console.log("888")
    //触发#avatar2的单击操作
    $("#avatar2").trigger("click");
    });
    /*
    
    // $("#upload_btn2").click(function () {
    //     console.log("888")
    //     //触发#avatar2的单击操作
    //     $("#avatar2").trigger("click");
    // });
    /*
    <div class="item">
    <img
    src="https://img1.baidu.com/it/u=1814112640,3805155152&fm=253&fmt=auto&app=120&f
    =JPEG?w=889&h=500" alt="">
    <span class="iconfont icon-guanbi"></span>
    </div>
    */

    // $(".item .icon-guanbi").click(function(){
    // console.log(888888)
    // });
    $(".upload_box").on("click", ".icon-guanbi", function () {
        console.log(888888)
        $(this).parent().remove();
        $("#upload_btn").show();
    })
}

function upload(obj) {
    var fileObj = obj.files[0];
    console.dir(fileObj)
    var reader = new FileReader();
    //数据加载完毕之后执行回调方法
    reader.addEventListener("load", function () {
        console.log("result::");
        console.log(reader.result)
        //把图片的数据赋值给某个节点
        //创建节点
        var itemObj = $('<div class="item"></div>')
        //把数据放在图片src中
        itemObj.append('<span class="iconfont icon-guanbi"></span>');
        itemObj.append('<img src="' + reader.result + '" alt="">');
        //添加节点
        $(".upload_box").prepend(itemObj)
        //当前图片的数量
        if ($(".item").length > 3) {
            $("#upload_btn").hide();
        }
        //3隐藏
        //preview.src = reader.result;
    }, false);

    //读取文件
    if (fileObj) {
        console.log("读取文件");
        reader.readAsDataURL(fileObj);
    }
}