
let form=document.getElementById("form")
let username=document.getElementById("username")
let password=document.getElementById("password")
let errorMessages=document.getElementById("errorMessages")

form.addEventListener("submit", e=>{
    e.preventDefault();
    let message=[];

    if(username.value === null || username.value ===  "")
    {
        message.push('Username is required.');
    }

    if(password.value === "" || password.value === null)
    {
        message.push( 'Password is required.');
    }

    if(password.value.length<6)
    {
        message.push('Password should be minimum 6 characters.')
    }

    if(message.length>0)
    {
        errorMessages.innerHTML=message.join(" ");
    } 

else
{
    console.log("Username" + username.value, "Password" + password.value);
}
});
