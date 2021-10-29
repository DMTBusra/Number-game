let number =document.querySelector(".num");
let check =document.querySelector("#check_button");
let result =document.getElementById("output");
let random = Math.round(Math.random()*100);
console.log(random);
check.addEventListener("click",()=> {
    if(number.lenght >= 3){
        result.innerText="lütfen iki basamakılı sayı giriniz";
    }
    
    else{
        let num=number.value;
        console.log(num);
        console.log(random);
        if(num<random){
            result.innerText="Sayıyı yükseltiniz."; 
            number.value = "";
        }
        else if(num>random){
            result.innerText="Sayıyı düşürünüz."; 
            number.value = ""; 
        }
        else if(num==random){
            random = Math.round(Math.random()*100);  
            result.innerText=" Tebrikler buldunuz. ";  
            number.value = ""; 
        }
        else{
            result.innerText="lütfen sayı giriniz";
            number.value = "";  
        }
    }   
    
     
    });

 

       







