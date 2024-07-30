import mongoose, { Document, Schema } from 'mongoose';

// Definice schématu pro produkt
const productSchema = new Schema({
  _id: { type: Number, required: true }, // ID produktu je číslo
  checked: { type: Boolean, default: false }, // Kontrolní stav jako boolean
  name: { type: String, required: true } // Název produktu
});

// Definice schématu pro seznam
const listSchema = new Schema({
  name: { type: String, required: true }, // Název seznamu
  completed: { type: Boolean, default: false }, // Dokončeno jako boolean
  products: [productSchema] // Pole produktů
});

// Definice modelu
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
