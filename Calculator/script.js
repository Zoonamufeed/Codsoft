const input= document.getElementsByTagName("p")[0];
let currentInput="";

const number = document.querySelectorAll(".num");
number.forEach(function(item){
    item.addEventListener("click", function(e){
        if(input.innerText === "NaN" || input.innerText === "0"){
        input.innerText = "";
    }
    input.innerText += e.target.innerHTML.trim();
});
});

const operations = document.querySelectorAll(".operator");
operations.forEach(function (item){
    item.addEventListener("click", function(e){
        const operator = e.target.innerHTML.trim();
        if(operator === "="){
            try{
                input.innerText = eval(input.innerText);
            }catch (error){
                input.innerText="0";
            }
}else{
    if(input.innerText !== "NaN" && input.innerText !== "0") {
        input.innerText += operator;
            }
        }    
    });
});
document.querySelector(".clear").addEventListener("click", function() {
    input.innerText = "0"; 
});