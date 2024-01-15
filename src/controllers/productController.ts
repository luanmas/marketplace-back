import { getAll, createProducts, getById, deleteProducts, updateProducts } from '../models/productModel';
import express from 'express';

export const getAllProduct = async (_req: express.Request, res: express.Response) => {
    const products = await getAll();

    return res.status(200).json(products);
}

export const getByIdProduct = async (req: express.Request, res: express.Response) => {
    const product_id = req.params.id;
    const [product] = await getById(product_id);

    return res.status(200).json(product);
}


export const createProduct = async(req: express.Request, res: express.Response) => {
    const createdProduct = await createProducts(req.body);
    return res.status(201).json({
        message: "Product created successfully",
        createdProduct
    });
};

export const deleteProduct = async(req: express.Request, res: express.Response) => {
    const product_id = req.params.id;

    try {
        await deleteProducts(product_id);
        return res.status(200).json({
            message: "Successfully deleted"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error when deleting"
        })
    }
    
}

export const updateProduct = async(req: express.Request, res: express.Response) => {
    const product = req.body;
    const product_id = req.params.id;

    try {
        const productUpdate = await updateProducts(product, product_id);
        return res.status(200).json({
            message: "Successfully updated",
            productUpdate
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error when updating product"
        })
    }
} 