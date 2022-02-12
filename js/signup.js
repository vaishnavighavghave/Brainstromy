window.onload = function() {


    document.getElementById("signupButton").addEventListener('click', function () {
    
        const fullname = document.getElementById('fullname');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        window.sessionStorage.setItem('fullname', fullname.value);
        window.sessionStorage.setItem('username', username.value);
        window.sessionStorage.setItem('email', email.value);
        window.sessionStorage.setItem('password', password.value);

        window.location.href = "home.html";
    });
    
    document.getElementById('backButton').addEventListener('click', function(){
        window.location.href = "home.html"; 
    })

}