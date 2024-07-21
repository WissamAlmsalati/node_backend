import { ParsedQs } from 'qs';
import ProductModel from '../models/ProductModel'; // Assuming ProductModel is the correct import

class ProductService {
    filterProducts(query: ParsedQs) {
        throw new Error("Method not implemented.");
    }
    async createProduct(product: any){ // Consider defining a type for 'product'
        return await ProductModel.create(product);
    }
    async getProducts(){
        return await ProductModel.find();
    }
    async getProductById(id: string){
        return await ProductModel
            .findById(id)
            .orFail(new Error('Product not found'));
    }
    async updateProduct(id: string, product: any){ // Consider defining a type for 'product'
        return await ProductModel
            .findByIdAndUpdate(id, product, { new: true })
            .orFail(new Error('Product not found'));
    }

    async deleteProduct(id: string){
        return await ProductModel
            .findByIdAndDelete(id)
            .orFail(new Error('Product not found'));
    }
    async searchProducts(query: string){
        return await ProductModel
            .find({ name: { $regex: query, $options: 'i' } });
    }

    async addReview(productId: string, review: any){ // Consider defining a type for 'review'
        return await ProductModel
        .findByIdAndUpdate(productId, { $push: { reviews: review } }, { new: true })
        .orFail(new Error('Product not found'));
    }

    async removeReview(productId: string, reviewId: string){
        return await ProductModel
        .findByIdAndUpdate(productId, { $pull: { reviews: { _id: reviewId } } }, { new: true })
        .orFail(new Error('Product not found'));
    }
}

export default new ProductService();