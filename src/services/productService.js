let products = [];
let idCounter = 1;


exports.create = (data) => {
const newProduct = { id: idCounter++, ...data };
products.push(newProduct);
return newProduct;
};


exports.update = (id, data) => {
const index = products.findIndex(p => p.id == id);
if (index === -1) throw new Error('Product not found');


products[index] = { ...products[index], ...data };
return products[index];
};


exports.delete = (id) => {
products = products.filter(p => p.id != id);
};