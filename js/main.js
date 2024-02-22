class ProductManager {
    constructor(products = []) {
        this.products = products;
        this.nextId = 1;
    }   
    //  Agrega un producto, al arreglo de productos inicial.
    addProduct(product) {
        const errors = [];
  
      // Validar que todos los campos sean obligatorios
        for (const key of ["title", "description", "price", "thumbnail", "code", "stock"]) {
        if (!product.hasOwnProperty(key) || product[key] === "") {
            errors.push(`El campo "${key}" es obligatorio.`);
        }
    }
  
      // Validar que no se repita el campo "code"
        const existingProduct = this.products.find((p) => p.code === product.code);
        if (existingProduct) {
        errors.push(`El código "${product.code}" ya está en uso.`);
    }
  
        if (errors.length > 0) {
        throw new Error(errors.join("\n"));
    }
  
      // Agregar producto con ID autoincrementable
        product.id = this.nextId++;
        this.products.push(product);
    }
      // Devuelve el array, con los productos creados.
    getProducts() {
        return this.products;
    }
    //Busca en el array, que el producto coincida con el "id".
    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
        console.error("Not found");
        return null;
    }
        return product;
    }
}
  