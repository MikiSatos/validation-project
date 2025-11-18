document.getElementById('productForm').addEventListener('submit', async (e) => {
e.preventDefault();


const data = {
name: name.value,
price: Number(price.value),
category: category.value,
brand: brand.value,
inStock: inStock.checked
};


const res = await fetch('/api/products', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data)
});


const json = await res.json();
alert(JSON.stringify(json));
});