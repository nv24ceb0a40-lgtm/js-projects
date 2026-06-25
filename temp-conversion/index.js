const tempInput=document.getElementById("tempInput");
const direction=document.getElementById("direction");
const result=document.getElementById("result");
const convertBtn=document.getElementById("convertBtn");

convertBtn.addEventListener("click",()=>{
    const temp=Number(tempInput.value);
    if(direction.value=="toFahrenheit")
    {
        result.textContent=`Result:${(temp*1.8 + 32).toFixed(2)}`;
    }
    else{
        result.textContent=`Result:${((temp-32)*(5/9)).toFixed(2)}`;
    }
})
