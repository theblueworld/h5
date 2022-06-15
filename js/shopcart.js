window.onload = function () {
    var selects = document.getElementsByClassName("select");
    console.log(selects);
    for(var i=0;i<selects.length;i++){
        selects[i].addEventListener("click",function name() {
            if (this.style.backgroundColor=="red"){
                this.style.backgroundColor="white";
            }else{
                this.style.backgroundColor="red";
            }
        })
    }
    
    var select_all = document.getElementsByClassName("select_all");
    for(var i=0;i<select_all.length;i++){
        select_all[i].addEventListener("click",function name() {
            if (this.style.backgroundColor=="red"){
                this.style.backgroundColor="white";
            }else{
                this.style.backgroundColor="red";
                let select = this.parentElement.parentElement.getElementsByClassName("select");
                for(var i=0;i<select.length;i++){
                    select[i].style.backgroundColor="red";
                }
            }
        })
    }
}
function reduce(obj) {
    if (obj.parentElement.getElementsByTagName("div")[0].innerHTML > 0) {
        obj.parentElement.getElementsByTagName("div")[0].innerHTML--;
    }
}
function append(obj) {
        obj.parentElement.getElementsByTagName("div")[0].innerHTML++;
}