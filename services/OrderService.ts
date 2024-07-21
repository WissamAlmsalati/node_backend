import { ParsedQs } from 'qs';
import OrderModel from '../models/OrderModel'; // Assuming OrderModel is the correct import

class OrderService{
    async createOrder(order: any){ // Consider defining a type for 'order'
        return await OrderModel.create(order);
    }
    async getOrders(){
        return await OrderModel.find();
    }
    async getOrderById(id: string){
        return await OrderModel
            .findById(id)
            .orFail(new Error('Order not found'));
    }
    async updateOrder(id: string, order: any){ // Consider defining a type for 'order'
        return await OrderModel
            .findByIdAndUpdate(id, order, { new: true })
            .orFail(new Error('Order not found'));
    }

    async deleteOrder(id: string){
        return await OrderModel
            .findByIdAndDelete(id)
            .orFail(new Error('Order not found'));
    }
    async searchOrders(query: string){
        return await OrderModel
            .find({ name: { $regex: query, $options: 'i' } });
    }

    async getOrdersByUserId(userId: string){
        return await OrderModel
            .find({ userId: userId });
    }
}

export default new OrderService();