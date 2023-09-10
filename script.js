// let yname,lname; 
let flag;
var loveresult=0;
function checkloveper(){
   
    let yname = document.getElementById("yourname").value;
    let lname = document.getElementById("lovename").value;
    let names = document.getElementById("names");
    
    if(yname !== "" && lname !== "")
    {
        flag = true;
        loveper();
    }
    else if(yname !== "" && lname === ""){
        names.innerHTML = "<h6> Enter Your Lover Name </h6>";
        flag = false;
        loveper();
    }

    else if(yname === "" && lname !== ""){
        names.innerHTML = "<h6> Enter Your Name </h6>";
        flag = false;
        loveper();
    }

    else{
        names.innerHTML = "<h6> Enter Your and your Lover Name </h6>"
        flag = false;
        loveper();
    }
}


function loveper(){
            
    let yname = document.getElementById("yourname").value;
    let lname = document.getElementById("lovename").value;

    let names = document.getElementById("names");
    
    // yname = yname.toLowerCase();
    // lname = lname.toLowerCase();

    let giveprompt = document.getElementById("giveprompt");
    
    
        if(flag === true)
        {
            names.innerHTML = yname + "  ❤️💕  " + lname;
            loveresult = Math.random()*100;
            loveresult = Math.floor(loveresult)+1;
            // document.getElementById('lovevalue').value=loveresult + "%";
        }
        else{
            loveresult = 0;
            // document.getElementById('lovevalue').value="";
            giveprompt.innerHTML = "";
        }
        
    
    prog();
    reset();

}

function reset(){
    document.getElementById("yourname").value = "";
    document.getElementById("lovename").value = "";
}

// progress bar

function prog(){
    let number = document.getElementById("number");
    let x = loveresult;
    let z = 430 - 430*(x/100)
    root = document.documentElement;
    root.style.setProperty('--y',z)
    let counter = 0;
    if(x === 0)
    {
        number.innerText = "0%";
    }
    else{

        setInterval(() => {
            
            if(counter === x)
            {
                
                clearInterval();
            }
            else{
                counter +=1;
                number.innerText = counter + "%";
            }
            
        },30);
    }
}
