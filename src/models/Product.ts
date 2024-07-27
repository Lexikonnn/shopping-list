import mongoose, { Document, Schema } from 'mongoose';


interface Product extends Document {
  id: number;
  name: string;
  listId: number;
}


const ProductSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  listId: { type: Number, required: true, unique: true },
});


const Product = mongoose.model<Product>('Item', ProductSchema);

export default Product;
