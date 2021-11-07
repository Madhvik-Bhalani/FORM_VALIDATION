let name = document.getElementById('name');
let no = document.getElementById('no');
let mail = document.getElementById('mail');
var validname=false;
var validno=false;
var validmail=false;

console.log('Form-validation');
// console.log(uname,no,mail);
/**************/
name.addEventListener('blur', () => {
    let reg = /^([\w+\s\d+\.\-]){5,20}$/;
    // or   /^([\w+\s]){2,20}$/
    let str = name.value;
    if (str.match(reg)) {
        validname=true;
        alert('name is valid')

    }
    else {
        validname=false
        alert('name is not valid');
    }
})


/***********/

no.addEventListener('blur', () => {
    let reg =/^([\d+]){10}$/;
    let str = no.value;
    if (str.match(reg)) {
        validno=true;
        alert('mobile no is valid');
    }
    else {
        validno=false;
        alert('mobile no must be 10 digit');
    }
})


/********/

mail.addEventListener('blur',()=>{
    let reg=/^([\w+\.\-\d+]+)@([a-zA-Z]){3,6}\.([a-zA-Z]){3,7}$/;
    let str=mail.value;
    if(str.match(reg))
    {
        validmail=true;
        alert('email is valid');
    }
    else{
        validmail=false;
        alert('email is not valid');
    }
})
/**************** */
let submit=document.getElementById('submit');
submit.addEventListener('click',()=>{
    if(validmail && validname && validno)
    {
        alert('form successfully submited..')
    }
    else{
        alert('please fill all required filed(*)')
    }
})