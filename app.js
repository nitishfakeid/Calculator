let string = "";
let buttons = Array.from(document.querySelectorAll('.key'));
let display = document.querySelector('p');
let flag = 0;
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(flag==1)
        {
            string = "";
            display.innerText = string;
            flag=0;
        }
        switch(e.target.innerText)
        {
            case '←':
                string = string.substring(0,string.length-1);
                display.innerText = string;
                break;
            case 'x':
                string += '*';
                display.innerText = string;
                break;
            case 'AC':
                string = "";
                display.innerText = string;
                break;
            case '=':
                try{
                    string = eval(string);
                    display.innerText = string;
                    flag=1;
                }
                catch{
                    display.innerText = "Error!";
                }
                break;
            default:
                string += e.target.innerText;
                display.innerText = string;
                break;
        }
    })
})