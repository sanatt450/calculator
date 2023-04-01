let screen = document.getElementById('screen');
button= document.querySelectorAll('button');
let screenvalue='';
for(item of button){
    item.addEventListener('click', (e) => {
        buttonText=e.target.innerText;
        console.log("button is",buttonText)
        if(buttonText=="C"){
            screenvalue ='0';
            screen.value=screenvalue;
        }
        else if(buttonText=="="){
            screen.value=eval(screenvalue);
        }
        else
        {
            screenvalue += buttonText;
            screen.value=screenvalue;
        }
    })
}