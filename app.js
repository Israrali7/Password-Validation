// let showPass = document.getElementById('showpass')
// let input = document.getElementById('password')
// showPass.addEventListener('click',()=> {
//     if (input.type === 'password') {
//         input.type = 'text';
//     } else {
//         input.type = 'password';
//     }

// })
let password = document.getElementById('password')
let Check = document.querySelector('Check')
let chart = document.getElementById('chart')
let uppercase = document.getElementById('uppercase')
let lowercase = document.getElementById('lowercase')
function che() {
    var pass = password.value
    var arr = pass.split('');
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
        var specialChar = "!@#$%^&*()-=_+"
        var numberChar = "123456789"
        switch (element) {
            case uppercaseChar[i] :
                uppercase.classList.add('new');
            case lowercaseChar[i] :
                    lowercasecase.classList.add('new');
            case specialChar[i] :
                    special.classList.add('new');
            case numberChar[i] :
                    number.classList.add('new');
            case length <= 9 :
                    length.classList.add('new');   
            // default:
            //     alert('YoUr Password Not seems strong')
            // break;
            }
    }
}
