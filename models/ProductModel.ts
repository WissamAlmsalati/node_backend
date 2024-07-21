import { Schema,model,Document } from "mongoose";



export interface IProduct extends Document{
    _id:string;
    name:string;
    price:number;
    description:string;
    image:string;
}

const productSchema = new Schema<IProduct>({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true}
});

const Product = model<IProduct>('Product',productSchema);

export default Product;


