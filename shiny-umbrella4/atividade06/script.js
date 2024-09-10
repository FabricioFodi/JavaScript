document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const fullName = document.getElementById('fullName').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Full Name:', fullName);
    console.log('Password:', password);

    alert('Account created successfully!');
});
