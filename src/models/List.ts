import mongoose, { Document, Schema } from 'mongoose';


const productSchema = new Schema({
  _id: { type: Number, required: true }, 
  checked: { type: Boolean, default: false }, 
  name: { type: String, required: true }
});


const listSchema = new Schema({
  name: { type: String, required: true }, 
  completed: { type: Boolean, default: false }, 
  products: [productSchema] 
});


const List = mongoose.model<ListDocument>('List', listSchema);

interface Product {
  _id: number;
  checked: boolean;
  name: string;
}

interface ListDocument extends Document {
  name: string;
  completed: boolean;
  products: Product[];
}

export default List;
