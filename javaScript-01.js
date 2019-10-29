
var is_change = true;
function changeFunction(){
    x = document.getElementById('demo');
    if (is_change){
        x.style.color = "#ff0000";
        x.innerHTML = 'Hello world';
    }
    else{
        x.style.color = "#000000";
        x.innerHTML = '你好, 世界';
    }
    is_change = !is_change;
    console.log(x.innerHTML);
}

function verifyNumber(){
    number = document.getElementById('number').value;
    if(isNaN(number)||number.replace(/(^\s*)|(\s*$)/g,"")==""){
        alert("不是数字");
    }else
        alert('right');
}