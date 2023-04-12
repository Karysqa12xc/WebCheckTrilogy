function checkTrilogy(){
    var diem1 = document.getElementById("Value_A");
    var diem2 = document.getElementById("Value_B");
    var diem3 = document.getElementById("Value_C");
    var a = parseInt(diem1.value);
    var b = parseInt(diem2.value);
    var c = parseInt(diem3.value);
    var stringAllValue = document.getElementById("printAllValue");
    stringAllValue.innerHTML  = "Giá trị các điểm của tam giác là: a: " + a + " | b: "+ b + " | c: " + c; 
    var res = document.getElementById("result");
    if(a<b+c && b<a+c && c<a+b){
        if(Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2) || Math.pow(b,2) == Math.pow(b,2) + Math.pow(a,2) || Math.pow(c,2) == Math.pow(b,2) + Math.pow(a,2)){
            res.innerHTML = "Qua các thông số trên thì đây là tam giác vuông";
        }
        else if(a == b && b == c){
            res.innerHTML = "Qua các thông số trên thì đây là tam giác đều";
        }
        else if(a == b || b == c || a == c){
            res.innerHTML = "Qua các thông số trên thì đây là tam giác cân";
        }else if(Math.pow(a,2) > Math.pow(b, 2) + Math.pow(c,2) || Math.pow(b,2) > Math.pow(a, 2) + Math.pow(c,2) || Math.pow(c,2) > Math.pow(b, 2) + Math.pow(a,2)){
            res.innerHTML = "Qua các thông số trên thì đây là tam giác tù";
        }else{
            res.innerHTML = "Qua các thông số trên thì đây là tam giác nhọn";
        }
    }else{
        res.innerHTML = "Ba cạnh a: " + a + " b: " + b + " c: " + c + " không phải là ba cạnh của một tam giác";
    }  
}