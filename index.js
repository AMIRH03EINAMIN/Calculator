// متغیرها
let num1 = "";
let num2 = "";
let opsign = "";
let answer = "";
let repeat = ""
// این تابع عدد از کاربر دریافت میکنه
function Number(Num){
    if (opsign === "") {
        num1 += Num;
        document.getElementById("answer").innerHTML = num1;
    }else {
        num2 += Num;
        document.getElementById("answer").innerHTML = num2;
    }
}
//  این تابع عدد مثبت را منفی و عدد منفی را مثبت میکنه
function Negative(){
    if(num1 !== ""){
        num1 = parseFloat(num1) * -1;
        document.getElementById("answer").innerHTML = num1;
    }
}
// این تابع عملیات را محاسبه میکنه
function operator(sign){
    if(num1 === ""){
        num1 = "0";
    }else if(num2 !== ""){
        repeat = sign;
        sign = '=';
    }
    switch (sign){
        case 'c':
            clear()
            break        
        case '+':
        case '-':
        case '*':
        case '/':
        case 'x^y':
        case '%':
            opsign = sign;
            break
        case '√x':
            answer = Math.sqrt(parseInt(num1))
            document.getElementById("answer").innerHTML = answer;
            num1 = answer;
            break
        case '1/x':
            answer = 1 / parseFloat(num1);
            document.getElementById("answer").innerHTML = answer;
            num1 = answer;
            break
        case '=':
            switch(opsign){
                case '+':
                    answer = parseFloat(num1) + parseFloat(num2);
                    break
                case '-':
                    answer = parseFloat(num1) - parseFloat(num2);
                    break
                case '*':
                    answer = parseFloat(num1) * parseFloat(num2);
                    break
                case '/':
                    answer = parseFloat(num1) / parseFloat(num2);
                    break
                case 'x^y':
                    answer = Math.pow(parseFloat(num1), parseFloat(num2));
                    break
                case '%':
                    answer = parseFloat(num1) * (parseFloat(num2) / 100);
                    break
                    case '√x':
                        answer = Math.sqrt(parseInt(num1))
                        break
                    case '1/x':
                        answer = 1 / parseFloat(num1);
                        break
            }
        if(opsign === ""){
            answer = "0";
        }
        document.getElementById("answer").innerHTML = answer;
        num1 = answer;
        num2 = "";
        opsign = repeat;
    }
}
function clear(){
    document.getElementById("answer").innerHTML = "0";
    num1 = "";
    num2 = "";
    opsign = "";
    answer = "";
    repeat = ""
}




