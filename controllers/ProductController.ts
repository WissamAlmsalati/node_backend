import { Request ,Response } from "express";
import productService from "../services/ProductService";

class ProductController {
    async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const result = await productService.createProduct(req.body);
            res.status(201).send(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }
    }

    async getProducts(req: Request, res: Response): Promise<void> {
        try {
            const result = await productService.getProducts();
            res.send(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }
    }

    async getProductById(req: Request, res: Response): Promise<void> {
        try {
            const result = await productService.getProductById(req.params.id);
            res.send(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }
    }

    async updateProduct(req: Request, res: Response): Promise<void> {
        try {
            const result = await productService.updateProduct(req.params.id, req.body);
            res.send(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }
    }

    async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            await productService.deleteProduct(req.params.id);
            res.send({ message: 'Product deleted successfully' });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }
    }

    async searchProducts(req: Request, res: Response): Promise<void> {
        try {
            const result = await productService.searchProducts(req.query.q as string);
            res.send(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }
    }

    async filterProducts(req: Request, res: Response): Promise<void> {
        try {
            const result = await productService.filterProducts(req.query);
            res.send(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }
    }
    
    async addReview(req: Request, res: Response): Promise<void> {
        try {
            const result = await productService.addReview(req.params.id, req.body);
            res.send(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }
    }

    async removeReview(req: Request, res: Response): Promise<void> {
        try {
            await productService.removeReview(req.params.id, req.params.reviewId);
            res.send({ message: 'Review deleted successfully' });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }
    }

    


    
}

export default ProductController;