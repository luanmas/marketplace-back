import { connection } from '../database/connection';
import { IProduct } from '../types/product';

export const getAll = async () => {
    const [products] = await connection.query('SELECT * FROM products')
    return products;
}

export const createProducts = async (product : IProduct) => {
    const { product_title, product_desc, product_price } = product;

    const created_at = new Date(Date.now()).toLocaleDateString();

    const query = 'INSERT INTO products(product_title, product_desc, product_price, created_at) VALUES (?, ?, ?, ?)';
    const createdProduct = await connection.query(query, [product_title, product_desc, product_price, created_at]);

    return createdProduct;
}

export const getById = async (id: string) => {
    const query = 'SELECT * FROM products WHERE product_id = ?';
    const product = await connection.query(query, [id]);

    return product;
}

export const deleteProducts = async (id: string) => {
    const query = 'DELETE FROM products WHERE product_id = ?';
    const product = await connection.query(query, [id]);

    return product;
}

export const updateProducts = async ({ product_title, product_price, product_desc, product_id }: IProduct,  id: string) => {
    const query = 'UPDATE products SET product_title = ?, product_desc = ?, product_price = ? WHERE product_id = ?'
    const productUpdate = await connection.query(query, [product_title, product_desc, product_price, id]);

    return productUpdate;
}