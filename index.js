var preValue = "0";
var sum = 0;
var prod = 1;
var numbers = [];
var operations = [];
var circlePos = 1;


document.querySelector('.themeBar').addEventListener('click', () => {
    let element = document.querySelectorAll('.key');
    switch (circlePos) {
        case 1:
            circlePos = 2;
            document.querySelector('.themeBar').classList.add('tb2');
            document.querySelector('.themeBar').classList.remove('themeBar');
            document.querySelector('.numPad').classList.add('numPad2');
            document.querySelector('.keyDel').classList.add('keyDel2');
            document.querySelector('.equals').classList.add('equals2');
            document.querySelector('.circle').classList.add('.circle2');
            document.querySelector('.reset').classList.add('reset2');
            for (let i = 0; i < element.length; i++) {
                element[i].classList.add('key2');
            }
            document.querySelector('.screen').classList.add('screen2');
            document.querySelector('.calBox').classList.add('calBox2');
            document.querySelector('.canvas').classList.add('canvas2');
            document.querySelector('.screenBoX').classList.add('screenBoX2');

            break;
        case 2:
            circlePos = 3;
            document.querySelector('.tb2').classList.add('tb3');
            document.querySelector('.tb2').classList.remove('tb2');
            //REMOVING ALL CLASSES ADDED IN CASE 1
            document.querySelector('.numPad').classList.remove('numPad2');
            document.querySelector('.keyDel').classList.remove('keyDel2');
            document.querySelector('.equals').classList.remove('equals2');
            document.querySelector('.circle').classList.add('.circle2');
            document.querySelector('.reset').classList.remove('reset2');
            for (let i = 0; i < element.length; i++) {
                element[i].classList.remove('key2');
            }
            document.querySelector('.screen').classList.remove('screen2');
            document.querySelector('.calBox').classList.remove('calBox2');
            document.querySelector('.canvas').classList.remove('canvas2');
            document.querySelector('.screenBoX').classList.remove('screenBoX2');
            //ADDING CLASSES FOR THEME 3
            document.querySelector('.numPad').classList.add('numPad3');
            document.querySelector('.keyDel').classList.add('keyDel3');
            document.querySelector('.equals').classList.add('equals3');
            document.querySelector('.reset').classList.add('reset3');
            for (let i = 0; i < element.length; i++) {
                element[i].classList.add('key3');
            }
            document.querySelector('.screen').classList.add('screen3');
            document.querySelector('.calBox').classList.add('calBox3');
            document.querySelector('.canvas').classList.add('canvas3');
            document.querySelector('.screenBoX').classList.add('screenBoX3');
            break;
        case 3:
            circlePos = 1;
            //REMOVING CLASSES ADDED FROM THEME 3
            document.querySelector('.tb3').classList.add('themeBar');
            document.querySelector('.tb3').classList.remove('tb3');
            document.querySelector('.numPad').classList.remove('numPad3');
            document.querySelector('.keyDel').classList.remove('keyDel3');
            document.querySelector('.equals').classList.remove('equals3');
            for (let i = 0; i < element.length; i++) {
                element[i].classList.remove('key3');
            }
            document.querySelector('.reset').classList.remove('reset3');
            document.querySelector('.screen').classList.remove('screen3');
            document.querySelector('.calBox').classList.remove('calBox3');
            document.querySelector('.canvas').classList.remove('canvas3');
            document.querySelector('.screenBoX').classList.remove('screenBoX3');

            break;
    }
});


document.querySelector("#key1").addEventListener('click', () => {

    if (preValue == "0") {
        preValue = "1";
    } else {
        preValue += "1";
    }
    document.querySelector('.screen').value = preValue;

})

document.querySelector("#key2").addEventListener('click', () => {

    if (preValue == "0") {
        preValue = "2";
    } else {
        preValue += "2";
    }
    document.querySelector('.screen').value = preValue;

})

document.querySelector("#key3").addEventListener('click', () => {

    if (preValue == "0") {
        preValue = "3";
    } else {
        preValue += "3";
    }
    document.querySelector('.screen').value = preValue;

})

document.querySelector("#key4").addEventListener('click', () => {

    if (preValue == "0") {
        preValue = "4";
    } else {
        preValue += "4";
    }
    document.querySelector('.screen').value = preValue;

})

document.querySelector("#key5").addEventListener('click', () => {

    if (preValue == "0") {
        preValue = "5";
    } else {
        preValue += "5";
    }
    document.querySelector('.screen').value = preValue;

})

document.querySelector("#key6").addEventListener('click', () => {

    if (preValue == "0") {
        preValue = "6";
    } else {
        preValue += "6";
    }
    document.querySelector('.screen').value = preValue;

})

document.querySelector("#key7").addEventListener('click', () => {

    if (preValue == "0") {
        preValue = "7";
    } else {
        preValue += "7";
    }
    document.querySelector('.screen').value = preValue;

})

document.querySelector("#key8").addEventListener('click', () => {

    if (preValue == "0") {
        preValue = "8";
    } else {
        preValue += "8";
    }
    document.querySelector('.screen').value = preValue;

})

document.querySelector("#key9").addEventListener('click', () => {

    if (preValue == "0") {
        preValue = "9";
    } else {
        preValue += "9";
    }
    document.querySelector('.screen').value = preValue;

})

document.querySelector("#key0").addEventListener('click', () => {

    if (preValue != "0") {
        preValue += "0";
        document.querySelector('.screen').value = preValue;
    }
})

document.querySelector(".reset").addEventListener('click', () => {
    if (preValue != "") {
        document.querySelector('.screen').value = "0";
        preValue = "0";
        sum = 0;
        prod = 1;
    }
})

document.querySelector("#keyD").addEventListener('click', () => {
    if (preValue != "0") {

        preValue = preValue.slice(0, preValue.length - 1);

        if (preValue == "") {
            preValue = "0";
        }
        document.querySelector('.screen').value = preValue;

    }
})

document.querySelector("#keyp").addEventListener('click', () => {

    numbers.push(Number(preValue));
    operations.push('+');
    document.querySelector('.screen').value = "0";
    preValue = "0";

})

document.querySelector("#keys").addEventListener('click', () => {

    numbers.push(Number(preValue));
    operations.push('-');
    document.querySelector('.screen').value = "0";
    preValue = "0";

})

document.querySelector("#keym").addEventListener('click', () => {

    numbers.push(Number(preValue));
    operations.push('x');
    document.querySelector('.screen').value = "0";
    preValue = "0";

})

document.querySelector("#keyDiv").addEventListener('click', () => {

    numbers.push(Number(preValue));
    operations.push('/');
    document.querySelector('.screen').value = "0";
    preValue = "0";

})



document.querySelector('.equals').addEventListener('click', () => {
    numbers.push(Number(preValue));
    var TOTAL = numbers[0];
    numbers.shift();
    while (numbers.length > 0) {

        switch (operations[0]) {
            case '+':
                TOTAL += numbers[0];
                numbers.shift();
                break;
            case '-':
                TOTAL -= numbers[0];
                numbers.shift();
                break;
            case 'x':
                TOTAL *= numbers[0];
                numbers.shift();
                break;
            case '/':
                TOTAL /= numbers[0];
                numbers.shift();
                break;
        }
        operations.shift();

    }
    document.querySelector('.screen').value = TOTAL.toString();
    preValue = TOTAL.toString();
})

document.querySelector('#keym').addEventListener('click', () => {
    if (preValue != prod) {
        prod *= Number(preValue);

    }
})
