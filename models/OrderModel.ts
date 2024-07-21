import {Schema , model, Document } from 'mongoose';


export interface IOrder extends Document{
    _id:string;
    user:string;
    user_id:string;
    product:string;
    quantity:number;
    total:number;
}

const orderSchema = new Schema<IOrder>({
    user:{type:String,required:true},
    user_id:{type:String,required:true},
    product:{type:String,required:true},
    quantity:{type:Number,required:true},
    total:{type:Number,required:true}
});

const Order = model<IOrder>('Order',orderSchema);

export default Order;
