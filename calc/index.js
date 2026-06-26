const buttons=document.getElementById("buttons");
const display=document.getElementById("display");
let expression="";
buttons.addEventListener("click",(event)=>{

    if(event.target.dataset.num!==undefined)
    {
        expression+=event.target.dataset.num;;
    }
    else if(event.target.dataset.op!==undefined)
    {
        expression+=event.target.dataset.op;
    }
    else if(event.target.id==="equals")
    {
        try{
        expression = eval(expression).toString();           
        }
       catch(error){
            expression="error";
       }
    }
    else if(event.target.id==="clear")
    {
        expression="";

    }
    else if(event.target.id==="backspace")
    {
        expression=expression.slice(0,-1);
    }

    display.textContent=expression || "0";
})