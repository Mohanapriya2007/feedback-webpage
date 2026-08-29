<!DOCTYPE html>
<html>
<head>
    <title>Form Validation</title>

    <style>
        body {
            font-family: Arial;
            background: #f2f2f2;
        }

        .box {
            width: 350px;
            margin: 30px auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
        }

        input, textarea {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
            box-sizing: border-box;
        }

        button {
            padding: 10px 20px;
            background: #333;
            color: white;
            border: none;
            cursor: pointer;
        }

        h2 {
            text-align: center;
        }

        p {
            color: red;
        }
    </style>
</head>

<body>

<!-- Registration Form -->
<div class="box">
    <h2>Registration</h2>

    <form id="registerForm">
        <input type="text" id="name" placeholder="Enter Name">
        <input type="email" id="email" placeholder="Enter Email">
        <input type="password" id="password" placeholder="Enter Password">
        <input type="password" id="confirm" placeholder="Confirm Password">

        <button type="submit">Register</button>
        <p id="regMsg"></p>
    </form>
</div>

<!-- Login Form -->
<div class="box">
    <h2>Login</h2>

    <form id="loginForm">
        <input type="email" id="loginEmail" placeholder="Enter Email">
        <input type="password" id="loginPassword" placeholder="Enter Password">

        <button type="submit">Login</button>
        <p id="loginMsg"></p>
    </form>
</div>

<!-- Feedback Form -->
<div class="box">
    <h2>Feedback</h2>

    <form id="feedbackForm">
        <input type="text" id="student" placeholder="Enter Name">
        <textarea id="feedback" placeholder="Enter Feedback"></textarea>

        <button type="submit">Submit Feedback</button>
        <p id="feedMsg"></p>
    </form>
</div>

<script>

    // Registration validation
    document.getElementById("registerForm").addEventListener("submit", function(event) {

        event.preventDefault();

        let fields = [
            document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("password").value,
            document.getElementById("confirm").value
        ];

        let valid = true;

        // Loop
        for (let i = 0; i < fields.length; i++) {
            if (fields[i] == "") {
                valid = false;
            }
        }

        // Conditional statements
        if (!valid) {
            document.getElementById("regMsg").innerHTML =
                "Please fill all fields.";
        }
        else if (fields[2] != fields[3]) {
            document.getElementById("regMsg").innerHTML =
                "Passwords do not match.";
        }
        else {
            document.getElementById("regMsg").style.color = "green";
            document.getElementById("regMsg").innerHTML =
                "Registration successful!";
        }
    });


    // Login validation
    document.getElementById("loginForm").addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if (email == "" || password == "") {
            document.getElementById("loginMsg").innerHTML =
                "Please enter email and password.";
        }
        else {
            document.getElementById("loginMsg").style.color = "green";
            document.getElementById("loginMsg").innerHTML =
                "Login successful!";
        }
    });


    // Feedback validation
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("student").value;
        let feedback = document.getElementById("feedback").value;

        if (name == "" || feedback == "") {
            document.getElementById("feedMsg").innerHTML =
                "Please enter name and feedback.";
        }
        else {
            document.getElementById("feedMsg").style.color = "green";
            document.getElementById("feedMsg").innerHTML =
                "Thank you for your feedback!";
        }
    });

</script>

</body>
</html>