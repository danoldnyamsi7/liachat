$(document).ready(() => {

    const username = document.querySelector('.username');
    const password = document.querySelector('.password');
    const loginBtn = document.querySelector('.login');
    const register = document.querySelector('.register');
    const alert = document.querySelector('.alert');

    const url = 'https://liachat.herokuapp.com/liachat.api/user/login';






    register.addEventListener('click', (event) => {
        event.preventDefault();
        window.location = "./src/views/register.html";
    });


    // Post User Details
    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (username.value == '') {
            username.style.border = '1px solid red';
            return;
        } else {
            if (password.value == '') {
                password.style.border = '1px solid red';
                return;
            } else {
                // Create new user object
                const user = {
                    username: username.value,
                    password: password.value,
                    isLoggedIn: true
                }

                $.post(url, user, (user, statusResponse) => {
                    if (user.username == username.value) {
                        localStorage.setItem('LoggedUser', user);
                        window.location = "./src/views/index.chat.html"
                    } else {
                        alert.innerHTML = "Login Error";
                        alert.classList.add('alert-danger');
                        alert.classList.remove('d-none');
                    }
                });

            }
        }

    });

});