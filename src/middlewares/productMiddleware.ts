import { Request, Response, NextFunction} from 'express';

export const productMiddleware = {
    create: (req: Request, res: Response, next: NextFunction) => {
        const { product_title, product_desc, product_price } = req.body;

        if(product_title === undefined) {
            return res.status(400).json({
                message: 'The field title is required'
            })
        }

        if(product_title === '') {
            return res.status(400).json({
                message: 'The field title is not empty'
            })
        }

        if(product_desc === undefined) {
            return res.status(400).json({
                message: 'The field desc is required'
            })
        }

        if(product_desc === '') {
            return res.status(400).json({
                message: 'The field desc is not empty'
            })
        }

        if(product_price === undefined) {
            return res.status(400).json({
                message: 'The field price is required'
            })
        }

        if(product_price === '') {
            return res.status(400).json({
                message: 'The field price is not empty'
            })
        }

        next();
    },

    updateProduct: (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const { product_title, product_desc, product_price } = req.body;

        if(product_title === undefined) {
            return res.status(400).json({
                message: 'The field title is required'
            })
        }

        if(product_title === '') {
            return res.status(400).json({
                message: 'The field title is not empty'
            })
        }

        if(product_desc === undefined) {
            return res.status(400).json({
                message: 'The field desc is required'
            })
        }

        if(product_desc === '') {
            return res.status(400).json({
                message: 'The field desc is not empty'
            })
        }

        if(product_price === undefined) {
            return res.status(400).json({
                message: 'The field price is required'
            })
        }

        if(product_price === '') {
            return res.status(400).json({
                message: 'The field price is not empty'
            })
        }

        if(id === undefined) {
            return res.status(400).json({
                message: 'The ID is required'
            })
        }

        if(id === '') {
            return res.status(400).json({
                message: 'The ID is not empty'
            })
        }

        next();
    }
}

