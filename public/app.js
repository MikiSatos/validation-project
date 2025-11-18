const form = document.getElementById('productForm');
const productList = document.getElementById('productList');

async function loadProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();
  productList.innerHTML = '';
  products.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.name} — ${p.category} — $${p.price} — ${p.inStock ? 'In stock' : 'Out of stock'}`;
    productList.appendChild(li);
  });
}

// Отправка формы
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    price: parseFloat(document.getElementById('price').value),
    category: document.getElementById('category').value,
    brand: document.getElementById('brand').value,
    inStock: document.getElementById('inStock').checked
  };

  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    form.reset();
    loadProducts(); // обновляем список после добавления
  } else {
    const err = await res.json();
    alert('Ошибка: ' + err.error);
  }
});

// Загружаем продукты при открытии страницы
loadProducts();
