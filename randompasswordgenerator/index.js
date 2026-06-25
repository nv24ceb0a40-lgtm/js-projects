const passwordLength=document.getElementById("length");
const uppercase=document.getElementById("uppercase");
const lowercase=document.getElementById("lowercase");
const numbers=document.getElementById("numbers");
const symbols=document.getElementById("symbols");
const generateBtn=document.getElementById("generateBtn");
const result=document.getElementById("result");
const copyBtn=document.getElementById("copyBtn");
let password="";
const generatePassword=(passwordLength,uppercase,lowercase,
    numbers,symbols)=>{
        const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
        let allowedChars="";

        if(uppercase.checked)
        {
            allowedChars+=upperChars;
        }
        if(lowercase.checked)
        {
            allowedChars+=lowerChars;
        }
        if(numbers.checked)
        {
            allowedChars+=numberChars;
        }
        if(symbols.checked)
        {
            allowedChars+=symbolChars;
        }

        for(let i=0;i<passwordLength.value;i++)
        {
            const index=Math.floor((Math.random()*allowedChars.length));
            password+=allowedChars[index];
        }

    }

const reset=()=>{
    password="";
}
generateBtn.addEventListener("click",()=>{

    generatePassword(passwordLength,uppercase,lowercase,
    numbers,symbols);

    result.textContent=password;
    reset();
})
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(result.textContent)
        .then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => {
                copyBtn.textContent = "Copy";
            }, 1500);
        });
});