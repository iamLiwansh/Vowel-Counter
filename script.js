
function countVowels(){
    let str = document.getElementById("abc").value.toLowerCase();
    let count = 0;
    for(let i = 0 ; i< str.length ; i++){
        if(str[i] === "a"){
            count++;
        } else if(str[i] === "i"){
            count++;
        } else if(str[i] === "e"){
            count++;
        } else if(str[i] === "o"){
            count++;
        } else if(str[i] ==="u"){
            count++;
        }
            document.getElementById("output").textContent = "vowels number in the name is: " + count;
        }
    }


countVowels();

