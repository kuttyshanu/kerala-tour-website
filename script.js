let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error=document.getElementById("error");
let erro1=document.getElementById("erro1");
let erro2=document.getElementById("erro2");
let erro3=document.getElementById("erro3");
let chec1=document.getElementById("chec1");
let exc1=document.getElementById("exc1");
let chec2=document.getElementById("chec2");
let exc2=document.getElementById("exc2");
let done1=document.getElementById("done1");
let done2=document.getElementById("done2");
let done3=document.getElementById("done3");
let wrong1=document.getElementById("wrong1");
let wrong2=document.getElementById("wrong2");
let wrong3=document.getElementById("wrong3");
function vali(){
    let tag = false;
    let tag1=false;
    let tag2=false;
    let tag3=false;
    let tag4=false;
    let tag5=false;
    if(email.value.trim()==""){
        alert("email is empty");
        exc1.style.visibility="visible";
        exc1.style.color="red";
        tag= false;
    }
    if(pwd.value.trim()==""){
        alert("password is empty");
        exc2.style.visibility="visible";
        exc2.style.color="red";
        tag1= false;
    }
    else if(pwd.value.length<=8){
        alert("password is too short");
        pwd.style.border="2px solid red";
        exc2.style.visibility="visible";
        exc2.style.color="red";
        tag2= false;
    }
    else{
        tag2 = true;
    }
    var regexp=/^([\w\.-]+)@([A-Za-z0-9\.-]).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "valid";
        error.style.color="green";
        exc1.style.visibility="hidden";
        chec1.style.visibility="visible";
        chec1.style.color="lightgreen";
        tag= true
    }
    else{
        error.innerHTML = "invalid";
        error.style.color = "red";
        exc1.style.visibility="visible";
        exc1.style.color="red";
        tag=false;
    }
        // password
    var Uppercase=/^(?=.*[A-Z]).*$/;
    if (Uppercase.test(pwd.value)){
        wrong1.style.visibility="hidden";
        done1.style.visibility="visible";
        done1.style.color="lightgreen";
        tag1=true;
    }
    else{
        wrong1.style.color="red";
        wrong1.style.visibility="visible";
        tag1=false;
    }
    var Lowercase =/^(?=.*[a-z]).*$/;
    if (Lowercase.test(pwd.value)){
        wrong2.style.visibility="hidden";
        done2.style.color="lightgreen";
        done2.style.visibility="visible";
        tag3=true;
    }
    else{
        wrong2.style.color="red";
        wrong2.style.visibility="visible";
        tag3=false;
    }
    var Number = /^(?=.*[0-9]).*$/;
    if (Number.test(pwd.value)){
        wrong3.style.visibility="hidden";
        done3.style.visibility="visible";
        done3.style.color="lightgreen";
        tag4=true;
    }
    else{
        wrong3.style.color="red";
        wrong3.style.visibility="visible";
        tag4=false;
    }


    if(tag1&&tag2&&tag3&&tag4==true){
        exc2.style.visibility="hidden";
        chec2.style.visibility="visible";
        chec2.style.color="lightgreen";
        tag5=true;
    }
    else{
        exc2.style.visibility="visible";
        exc2.style.color="red";
        tag5=false;
    }
    if(tag&&tag2&&tag1&&tag2&&tag4&&tag5==true){
        return true;
    }
    else{
        return false;
    }

}

let username = document.getElementById("username");
let email1 = document.getElementById("email1");
let phn = document.getElementById("phonenumber");
let password = document.getElementById("password");
let password1 = document.getElementById("password1");
let erro=document.getElementById("erro");
let errors=document.getElementById("errors");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error3");
let error4=document.getElementById("error4");
let poor=document.getElementById("poor");
let medium=document.getElementById("medium");
let strong=document.getElementById("strong");
let strength=document.querySelector("#strength");
let font=document.getElementById("font");
let check=document.getElementById("check");
let ex=document.getElementById("ex");
let check1=document.getElementById("check1");
let ex1=document.getElementById("ex1");
let check2=document.getElementById("check2");
let ex2=document.getElementById("ex2");
let check3=document.getElementById("check3");
let ex3=document.getElementById("ex3");
let check4=document.getElementById("check4");
let ex4=document.getElementById("ex4");
function checkinput(){
    let flag = false;
    let flag1=false;
    let flag2=false;
    let flag3=false;
    let flag4=false;
    let flag5=false;
    let flag6=false;
    let flag7=false;
    let flag8=false;
    let flag9=false;
    if(username.value.trim()==""){
        alert("username is empty");
        ex.style.visibility="visible";
        ex.style.color="red";
        flag = false;
    }

    if(email1.value.trim()==""){
        alert("email is empty");
        ex1.style.visibility="visible";
        ex1.style.color="red";
        flag1 = false;
    }
    if(phn.value.trim()==""){
        alert("phonenumber is empty");
        ex2.style.visibility="visible";
        ex2.style.color="red";
        flag2 = false;
    }
    if(password.value.trim()==""){
        alert("password is empty");
        ex3.style.visibility="visible";
        ex3.style.color="red";
        flag3 = false;
    }
    else if(password.value.length<=8){
        alert("password is too short");
        password.style.border="2px solid red";
        ex.style.visibility="visible";
        ex.style.color="red";
        flag8 = false;
    }
    else{
        flag8 = true;
    }
    if(password1.value.trim()==""){
        alert("password is empty");
        ex4.style.visibility="visible";
        ex4.style.color="red";
        flag9= false;
    }
    
    

    // username

    var user=/^([A-Za-z0-9\.-]{2,9})$/;
    if(user.test(username.value)){
        errors.innerHTML = "valid";
        errors.style.color="green";
        ex.style.display="none";
        check.style.visibility="visible";
        check.style.color="lightgreen";
        flag= true;
    }
    else{
        errors.innerHTML = "invalid";
        errors.style.color="red";
        ex.style.visibility="visible";
        ex.style.color="red";
        flag= false;
    }
    // email

    var regexp=/^([\w\.-]+)@([A-Za-z0-9\.-]).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email1.value)){
        erro.innerHTML = "valid";
        erro.style.color="green";
        ex1.style.display="none";
        check1.style.visibility="visible";
        check1.style.color="lightgreen";
        flag1 = true;
    }
    else{
        erro.innerHTML = "invalid";
        erro.style.color="red";
        ex1.style.visibility="visible";
        ex1.style.color="red";
        flag1 = false;
    }

    // phonenumber

    var phone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;;
    if(phone.test(phn.value)){
        error1.innerHTML = "valid";
        error1.style.color="green";
        ex2.style.display="none";
        check2.style.visibility="visible";
        check2.style.color="lightgreen";
        flag2 =true;
    }
    else{
        error1.innerHTML = "invalid";
        error1.style.color="red";
        ex2.style.visibility="visible";
        ex2.style.color="red";
        flag2 =false;
    }

    // password
    
    var Uppercase= /^(?=.*[A-Z]).*$/;
    if (Uppercase.test(password.value)) {
        error2.style.display="none";
        strength.style.background="red";
        flag3=true;
    }
    else{
        error2.innerHTML="Password must have at least one Uppercase Character.";
        flag3=false;
    }
    var Lowercase = /^(?=.*[a-z]).*$/;
    if (Lowercase.test(password.value)) {
        error3.style.display="none";
        strength.style.background="red";
        flag4=true;
    }
    else{
        error3.innerHTML="Password must have at least one Lowercase Character.";
        flag4=false;
    }
    var Number = /^(?=.*[0-9]).*$/;
    if (Number.test(password.value)) {
        error4.style.display="none";
        strength.style.background="red";
        flag5=true;
    }
    else{
        error4.innerHTML="Password must contain at least one Digit.";
        flag5=false;
    }
// password

    if(flag3&&flag4||flag4&&flag5||flag3&&flag5===true){
        strength.style.background="orange";
        flag7=true;
    }
    else{
        strength.style.background="red";
        flag7=false;
    }

    if(flag3&&flag4&&flag5==true){
        strength.style.background="green";
        ex3.style.display="none";
        check3.style.visibility="visible";
        check3.style.color="lightgreen";
        flag6=true;
    }
    else{
        strength.style.background="red";
        ex2.style.visibility="visible";
        ex2.style.color="red";
        flag6=false;
    }
    if(password1.value===password.value){
        ex4.style.visibility="hidden";
        check4.style.visibility="visible";
        check4.style.color="lightgreen";
        flag9=true;
    }
    else{
        alert("enter correct password");
        ex4.style.visibility="visible";
        ex4.style.color="red";
        flag=false;
    }
    
    
if(flag&&flag1&&flag2&&flag6&&flag7&&flag8&&flag9==true){
    return true;
}
else{
    return false;
}


}

