const form = document.getElementById('myform');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const text = document.getElementById('userInput').value;

    alert("Incorrect password");
});