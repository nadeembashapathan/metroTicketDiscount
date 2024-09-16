let display=document.querySelector("#display");
let button=document.querySelector("#calcul");
let curr="";
let age=parseInt(prompt("enter your age: "));
curr+="Age is " +age;
display.value=curr;
let gender=prompt("enter your gender: ").toLowerCase();
curr+=", Gender is "+gender;
display.value=curr+" then your ticket price is";
let price=100;
button.addEventListener("click",()=>{
    alert("You entered details are correct ?");
    curr="";
    if(gender==="female" && age>5 && age<=8){
        let pfp=(price-(price*(50/100)))/2;
        curr+="The Price is "+pfp;
        display.value=curr;
    }else if(gender==="female" && age>=65){
        let pfp=price-(price*80/100);
        curr+="The Price is "+pfp;
        display.value=curr;
    }else if(age<5){
        let pfp=0;
        curr+="The Price is "+pfp;
        display.value=curr;
    }else if((age<=8 && age>5)||(gender==="female" && age>8 && age<65)){
        let pfp=price/2;
        curr+="The Price is "+pfp;
        display.value=curr;
    }else{
        let prp=price;
        curr+="The Price is "+prp;
        display.value=curr;
    }
    button.disabled=true;
});