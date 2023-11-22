const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const discount = document.getElementById("discount");
const stock = document.getElementById("stock");
const quality = document.getElementById("quality");
const customersCount = document.getElementById("customersCount");
const country = document.getElementById("country");
const city = document.getElementById("city");
const category = document.getElementById("category");
const btn = document.getElementById("btn");


btn.addEventListener('click', function (){
    axios.post("https://northwind.vercel.app/api/customers", {
        title: title.value,
        price: price.value,
        description: description.value,
        discount: discount.value,
        country: country.value,
        stock: stock.value,
        quality: quality.value,
        customersCount: customersCount.value,
        city: city.value,
        category: category.value
    })
    .then(res => {
        console.log(res);
        })
})