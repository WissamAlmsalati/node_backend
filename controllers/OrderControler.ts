import { Request ,Response } from "express";
import orderService from "../services/OrderService";

class OrderController {
    async createOrder(req:Request ,res:Response): Promise<void>{
        try {
            const result = await orderService.createOrder(req.body);
            res.status(201).send(result);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }

    }

    async getOrders(req:Request ,res:Response): Promise<void>{
        try {
            const result = await orderService.getOrders();
            res.send(result);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }

    }

    async getOrderById(req:Request ,res:Response): Promise<void>{
        try {
            const result = await orderService.getOrderById(req.params.id);
            res.send(result);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }

    }

    async updateOrder(req:Request ,res:Response): Promise<void>{
        try {
            const result = await orderService.updateOrder(req.params.id, req.body);
            res.send(result);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }

    }

    async deleteOrder(req:Request ,res:Response): Promise<void>{
        try {
            await orderService.deleteOrder(req.params.id);
            res.send({ message: 'Order deleted successfully' });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }

    }

    async searchOrders(req:Request ,res:Response): Promise<void>{
        try {
            const result = await orderService.searchOrders(req.query.query as string);
            res.send(result);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }

    }


    async getOrdersByUser(req:Request ,res:Response): Promise<void>{
        try {
            const result = await orderService.getOrdersByUserId(req.params.userId);
            res.send(result);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error: 'An unexpected error occurred' });
            }
        }

    }

}

export default OrderController;

