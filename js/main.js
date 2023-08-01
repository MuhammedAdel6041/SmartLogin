/**
 * Deceleration of variables
 */
var userName = document.getElementById('userName');
var emailName = document.getElementById('registerEmail');
var password = document.getElementById('registerPassword');
var signUpBtn = document.getElementById('register');
var warning = document.getElementById('warning');
var success = document.getElementById('success');
let loginEmail = document.getElementById("logInEmail");
let loginPassword = document.getElementById("logInPassword");
let loginBtn = document.getElementById("login");
var danger = document.getElementById('danger');
var userListData = [];
if (document.getElementById('name') != null) {
    var username = localStorage.getItem('curentemailaddress');
    if (username) {
        document.getElementById('name').innerHTML = "Welcome " + username
    }
}

//###################### CHECK TO STORE IN localStorage ##################### 
if (localStorage.getItem("UserDataInfo") != null) {
    userListData = JSON.parse(localStorage.getItem("UserDataInfo"));
}
//###################### FUNCTION SIGN UP TO ADD USERS ##################### 



if (signUpBtn != null) {
    signUpBtn.addEventListener("click", storUserData)
    function storUserData() {
        //######################   CHECK IF EMAIL REPEATED OR NOT   #####################
        let index = userListData.findIndex((el) => {
            return el.email == emailName.value
        })
        //######################   USER   OBJECT    #####################
        var userInfo = {
            name: userName.value,
            email: emailName.value,
            password: password.value,
        }

        //######################  CHECK IF EMAIL EXIST OR NOT   #####################
        if (regexUserName() == true && regexEmailName() == true && regexPassword() == true) {
            if (index == -1) {
                //######################   CHECK INPUT EMPTY OR NOT   #####################
                if (signUpEmpty() == true) {
                    warning.classList.add("d-block")
                    warning.classList.remove("d-none")
                }
                else {
                    //######################   ADD DATA IN USER LIST DATA  #####################
                    userListData.push(userInfo);
                    localStorage.setItem('UserDataInfo', JSON.stringify(userListData));
                    warning.classList.remove("d-block")
                    warning.classList.add("d-none")
                    clearSignUpForm();
                    success.classList.add("d-block");
                    success.classList.remove("d-none");
                    danger.classList.add("d-none");
                    danger.classList.remove("d-block");
                    window.location.href = "Login.html"
                }
            }
            else {
                danger.classList.add("d-block")
                danger.classList.remove("d-none")
                emailName.classList.add("is-invalid");
                success.classList.add("d-none")
                success.classList.remove("d-block")

            }
        }

    }

}

//###################### CLEAR FORM INPUTS  ##################### 

function clearSignUpForm() {
    userName.value = "";
    emailName.value = "";
    password.value = "";
}

//######################   CHECK INPUT EMPTY OR NOT   #####################
function signUpEmpty() {
    if (userName.value == "" || emailName.value == "" || password.value == "") {
        warning.classList.add("d-block");
        warning.classList.remove("d-none");
        danger.classList.add("d-none");
        danger.classList.remove("d-block");
        return true;
    }
    else {
        return false;
    }
}

//######################   VALIDATION INPUT USER NAME  #####################
function regexUserName() {
    let regex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gm
    if (regex.test(userName.value) == true) {
        userName.classList.add("is-valid");
        return true;
    }
    else {
        userName.classList.add("is-invalid");
        return false;
    }
}
//######################   VALIDATION INPUT EMAIL NAME  #####################
function regexEmailName() {
    let regex = /^[a-zA-Z-0-9(#&*$?)]+@[a-zA-Z]+\.[a-z]{2,3}$/gm
    if (regex.test(emailName.value) == true) {
        emailName.classList.add("is-valid");
        return true;
    }
    else {
        emailName.classList.add("is-invalid");
        return false;
    }
}

//######################   VALIDATION INPUT PASSWORD NAME  #####################



function regexPassword() {
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;
    if (regex.test(password.value) == true) {
        password.classList.add("is-valid");
        return true;
    }
    else {
        password.classList.add("is-invalid");
        return false;
    }
}
/**
 * ^               // start of input 
(?=.*?[A-Z])    // Lookahead to make sure there is at least one upper case letter
(?=.*?[a-z])    // Lookahead to make sure there is at least one lower case letter
(?=.*?[0-9])    // Lookahead to make sure there is at least one number
[A-Za-z0-9]{6,} // Make sure there are at least 6 characters of [A-Za-z0-9]
$               // end of input
 */


//####################################
function isLoginEmpty() {

    if (loginPassword.value == "" || loginEmail.value == "") {
        return false
    } else {
        return true
    }
}
if (loginBtn !== null) {
    loginBtn.addEventListener("click", login)
    function login() {
        if (isLoginEmpty() == false) {
            document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
            return false
        }
        var password = loginPassword.value
        var email = loginEmail.value
        for (var i = 0; i < userListData.length; i++) {
            if (userListData[i].email.toLowerCase() == email.toLowerCase() && userListData[i].password.toLowerCase() == password.toLowerCase()) {
                localStorage.setItem('curentemailadd', userListData[i].name)
                window.location.href = "welcom.html"
                document.getElementById("name").innerHTML = userListData[i].name;
            } else {
                document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
            }
        }

    }

}
if(document.getElementById("close")!=null){
    document.getElementById("close").addEventListener("click", logout)
function logout() {
    window.location.href = "Login.html"
    localStorage.removeItem('sessionUsername')
}

}
