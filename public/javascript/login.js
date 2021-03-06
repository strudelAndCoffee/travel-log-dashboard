async function loginFormHandler(event) {
    event.preventDefault();

    // get user input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {

        // making request to /api/users/login route
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert(response.statusText);
        }
    }
}
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);