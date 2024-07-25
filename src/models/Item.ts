import mongoose, { Document, Schema } from 'mongoose';

// Definice rozhraní pro Item
interface IItem extends Document {
  name: string;
  id: string;  // Přidáno ID jako textové pole
}

// Schéma pro Item
const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true, unique: true }  // Pole ID jako textové pole
});

// Model pro Item
const Item = mongoose.model<IItem>('Item', ItemSchema);

export default Item;
