const lastName = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const btn = document.getElementById("btn");


btn.addEventListener('click', function (){
    axios.post("https://northwind.vercel.app/api/customers", {
        name: lastName.value,
        surname: surname.value,
        age: age.value,
        email: email.value
    })
    .then(res => {
        console.log(res);
        })
})