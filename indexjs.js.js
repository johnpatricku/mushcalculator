document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Add your authentication logic here (e.g., check against a database).
    // For demonstration purposes, we'll just show an alert.
    if (username === "johnpatrick" && password === "johnpatrick123") {
        window.close('index.html.html')
        window.open('home.html')
    } else {
        alert("Login failed. Please check your username and password.");
    }
});
