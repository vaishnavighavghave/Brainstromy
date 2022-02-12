window.onload = function () {
    console.log("parth");

    

    var users = [
        { fullname: "Parth Ghavghave", username: "parth",email: "parth@gmail.com", password: "1234" },
        { fullname: "Vaishnavi Ghavghave", username: "vaishnavi",email: "vaishnavi@gmail.com", password: "4321" }
    ]

    let x = sessionStorage.getItem('fullname');
    let y = sessionStorage.getItem('username');
    let z = sessionStorage.getItem('email');
    let w = sessionStorage.getItem('password');
    
    users.push({ 
        fullname: x, username: y, email: z, password: w
    });

    console.log(users);
    console.log(users[1].username);

    document.getElementById("loginbtn").addEventListener('click', function () {
        
        console.log("Clicked");

        let user = document.getElementById('currusername');
        let pass = document.getElementById('currpassword');

        for (let i = 0; i < users.length; i++) {
            console.log(users[i].username);
            if(user.value==users[i].username){
                if(pass.value==users[i].password){
                    
                    console.log("Success");
                    window.sessionStorage.setItem('currentusername', users[i].fullname);
                    window.location.href = "home.html"; //next page after success login

                    break;
                }
                else{
                    alert("Invalid password !");
                    break;
                }
            }
            else{
                if (user.value == y) {
                    if (pass.value == w) {


                        console.log("Success");
                        window.sessionStorage.setItem('currentusername', x);
                        window.location.href = "home.html"; //next page after success login

                        break;
                    }
                    else {
                        alert("Invalid password !");
                        break;
                    }
                }
                else {
                    continue;
                }
            }
        }
    });

}

