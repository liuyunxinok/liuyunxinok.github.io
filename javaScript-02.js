function createObject() {
    var car = {
        name: 'volvo',
        price: 1000000,
        color: '#ffffff'
    };
    return car;
}

function getNumber(){
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    if(this.verifyNumber(firstNumber) && this.verifyNumber(secondNumber)){
        return [firstNumber, secondNumber];
    }else{
        alert('请输入数字'+firstNumber+secondNumber);
    }
}

function verifyNumber(number){
    if(isNaN(number)||number.replace(/(^\s*)|(\s*$)/g,"")==""){
        return false;
    }else
        return true;
}

function caculateAdd(){
    this.caculate(1);
}

function caculateSub(){
    this.caculate(2);
}

function caculateMulti(){
    this.caculate(3);
}

function caculateDivision(){
    this.caculate(4);
}

function caculate(number){
    var firstNumber = this.getNumber()[0];
    var secondNumber = this.getNumber()[1];
    var result = 0;
    switch (number) {
        case 1:
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case 2:
            result = firstNumber - secondNumber;
            break;
        case 3:
            result = firstNumber * secondNumber;
            break;
        case 4:
            result = firstNumber / secondNumber;
            break;

        default:
            break;
    }
    this.showResult(result);
}

function showResult(result){
    document.getElementById('result').value = result;
}


function selectAll(isSelectAll){
    checkboxs = document.getElementsByName('checkbox');
    checkboxs.forEach(element => {
        element.checked = isSelectAll;
    });
}


