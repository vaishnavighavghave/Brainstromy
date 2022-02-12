window.onload = function() {

    let x = sessionStorage.getItem('currentusername');
    

    document.getElementById("profile").innerText=x;
    

    document.getElementById("profile").addEventListener('click', function() {


        var bar = document.getElementById('profile-bar');

        
        if (bar.style.display == 'none'){
            bar.style.display = 'block';
        }
        else{
            bar.style.display = 'none';
        }

    })

    
    
    
}