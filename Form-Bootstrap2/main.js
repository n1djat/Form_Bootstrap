const username = document.getElementById("username");
const password = document.getElementById("password");
const adress = document.getElementById("adress");
const email = document.getElementById("email");
const country = document.getElementById("country");
const btn = document.getElementById("btn");


btn.addEventListener('click', function (){
    axios.post("https://northwind.vercel.app/api/customers", {
        username: username.value,
        email: email.value,
        password: password.value,
        adress: adress.value,
        country: country.value
    })
    .then(res => {
        console.log(res);
        })
})