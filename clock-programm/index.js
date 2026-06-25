const clockProgramm=()=>{
    const now= new Date();
    const hours=now.getHours();
    const mins=now.getMinutes();
    const secs=now.getSeconds();
    const time=document.getElementById("clock");
    time.textContent=`${hours}:${mins}:${secs}`;
}
setInterval(clockProgramm,1000);