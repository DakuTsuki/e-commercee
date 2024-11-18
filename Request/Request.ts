export async function getAllCategory() {
  const CategoryRes = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  return CategoryRes.json();
}

export async function getAllProduct() {
  const ProductRes = await fetch("https://fakestoreapi.com/products");
  return ProductRes.json();
}

export async function getSingleFunction(id: string) {
  const singleProductRes = await fetch(`https://fakestoreapi.com/products/${id}`);
  return singleProductRes.json()
}

export async function getProductByCategory(category: string){
  const relatedProductByCategory = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  return relatedProductByCategory.json()
}