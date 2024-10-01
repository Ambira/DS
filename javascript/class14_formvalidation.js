const displayMsg = (msg, id, colorName) => {
    document.getElementById(id).innerHTML = msg;
    document.getElementById(id).style.color = colorName;
};

const fnameValidate = () => {
    const fname = document.getElementById("fname").value;
    if (fname === "") {
        displayMsg("Firstname is Mandatory", "fnamemsg", "red");
        return false;
    } else if (!fname.match(/^([a-zA-Z])+$/)) {
        displayMsg("Firstname must not include number", "fnamemsg", "red");
        return false;
    } else if (fname.length < 2) {
        displayMsg("Firstname must be more than two characters", "fnamemsg", "red");
        return false;
    } else {
        displayMsg("Valid Firstname", "fnamemsg", "green");
        return true;

    }
};

const lnameValidate = () => {
    const lname = document.getElementById("lname").value;
    if (lname === "") {
        displayMsg("Lastname is Mandatory", "lnamemsg", "red");
        return false;
    } else if (!lname.match(/^([a-zA-Z])+$/)) {
        displayMsg("Lastname must not include number", "lnamemsg", "red");
        return false;
    } else if (lname.length < 2) {
        displayMsg("Lastname must be more than two characters", "lnamemsg", "red");
        return false;
    } else {
        displayMsg("Valid Lastname", "lnamemsg", "green");
    }
    return true;
};

const emailValidate = () => {
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        displayMsg("Email is Mandatory", "emailmsg", "red");
        return false;
    } else if (!email.match(emailPattern)) {
        displayMsg("Invalid Email Format", "emailmsg", "red");
        return false;
    } else {
        displayMsg("Valid Email", "emailmsg", "green");
    }
    return true;
};

const pwdValidate = () => {
    const pwd = document.getElementById("pwd").value;
    if (pwd === "") {
        displayMsg("Password is Mandatory", "pwdmsg", "red");
        return false;}

    else if (!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%_&]).{8,30}$/)) {
        displayMsg("Weak Password", "pwdmsg", "red");
        return false;
    } else {
        displayMsg("Strong Password", "pwdmsg", "green");
    }
    return true;
};

const cpwdValidate = () => {
    const pwd = document.getElementById("pwd").value;
    const cpwd = document.getElementById("cpwd").value;
    if (pwd === "") {
        displayMsg("Confirm Password is Mandatory", "cpwdmsg", "red");
        return false;}

    else if (cpwd !== pwd) {
        displayMsg("Passwords do not match", "cpwdmsg", "red");
        return false;
    } else {
        displayMsg("Passwords match", "cpwdmsg", "green");
    }
    return true;
};

// Add event listeners to validate fields on input
const validateAllFields = () => {
    const validFname = fnameValidate();
    const validLname = lnameValidate();
    const validEmail = emailValidate();
    const validPwd = pwdValidate();
    const validCpwd = cpwdValidate();
    return validFname && validLname && validEmail && validPwd && validCpwd;
};

document.querySelector("form").addEventListener("submit", (event) => {
    if (!validateAllFields()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
