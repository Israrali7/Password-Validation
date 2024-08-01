let showPass = document.getElementById('showpass')
let input = document.getElementById('password')
showPass.addEventListener('click',()=> {
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }

})


let password = document.getElementById('password');
let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
let special = document.getElementById('special');
let number = document.getElementById('number');
let length = document.getElementById('length');

password.addEventListener('input', () => {
    let pass = password.value;
    let hasUppercase = false;
    let hasLowercase = false;
    let hasSpecial = false;
    let hasNumber = false;

    for (let i = 0; i < pass.length; i++) {
        let char = pass[i];
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char)) {
            hasUppercase = true;
        } else if ('abcdefghijklmnopqrstuvwxyz'.includes(char)) {
            hasLowercase = true;
        } else if ('!@#$%^&*()-=_+'.includes(char)) {
            hasSpecial = true;
        } else if ('1234567890'.includes(char)) {
            hasNumber = true;
        }
    }

    if (hasUppercase) {
        uppercase.classList.add('new');
    } else {
        uppercase.classList.remove('new');
    }

    if (hasLowercase) {
        lowercase.classList.add('new');
    } else {
        lowercase.classList.remove('new');
    }

    if (hasSpecial) {
        special.classList.add('new');
    } else {
        special.classList.remove('new');
    }

    if (hasNumber) {
        number.classList.add('new');
    } else {
        number.classList.remove('new');
    }

    if (pass.length >= 8) {
        length.classList.add('new');
    } else {
        length.classList.remove('new');
    }
});
