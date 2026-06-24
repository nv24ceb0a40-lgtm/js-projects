const countElement=document.getElementById("count");
const inc=document.getElementById("increase");
const dec=document.getElementById("decrease");
const res=document.getElementById("reset");
let count=0;
const updateCount=()=>{
    countElement.textContent=count;
}
inc.addEventListener("click",()=>{
    count++;
    updateCount();
})
dec.addEventListener("click",()=>{
    count--;
    updateCount();
})
res.addEventListener("click",()=>{
    count=0;
    updateCount();
})