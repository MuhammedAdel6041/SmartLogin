let loginEmail =document.getElementById("logInEmail");
let loginPassword =document.getElementById("logInPassword");
let loginBtn =document.getElementById("login");

var userListData=[];


// let Signin = document.getElementById("Signin")

// Signin?.addEventListener("click", function () {

//     let currentUser = list.find((el) => {
//         return el.email == emailInput.value && el.password == passwordInput.value
//     })
//     if(currentUser == undefined){
//         alert("Incorrect Email or passoword")
//     }else{
//         localStorage.setItem("currentUser",currentUser.name)
//         window.location.href = "welcome.html"
//     }
// })
loginBtn?.addEventListener("click", function () {
    let currentUser = userListData.find((el) => {
        return el.loginEmail == emailName.value && el.loginPassword == password.value
    })
    if(currentUser == undefined){
        alert("Incorrect Email or passoword")
    }else{
        localStorage.setItem("currentUser",currentUser.name)
        window.location.href = "index.html"
    }

})
if(localStorage.getItem("currentUser") !== null){

    document.getElementById("Welcome").innerHTML = "WElcom" + localStorage.getItem("currentUser") 
}
