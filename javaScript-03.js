"use strict"

function catchError(){
    try {
        lert('哈哈');
    }catch(err){
        var message = '本页有一个错误 \n';
        message += err.message;
        alert(message);
    }finally{
        alert('最终执行');
    }
}

function verrifyNumber(){
    number = document.getElementById('numberTextField').value;
    try{
        if(number == '')
            throw '数字为空';
        else if(isNaN(number))
            throw '不是数字';
        else if (number > 20)
            throw '数字太大';
        else if (number < 10)
            throw '数字太小';
    }catch(err){
        document.getElementById('resultTip').innerHTML = err;
    }
    var number; //变量提升, 先使用, 后声明
}

(function (){
    console.log('自调用函数');
})()

