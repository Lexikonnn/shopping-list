import mongoose, { Document, Schema } from 'mongoose';

interface IList extends Document {
  name: string;
  isCompleted?: boolean;
  isEditModeList?: boolean;
}

const ListSchema: Schema = new Schema({
  name: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  isEditModeList: { type: Boolean, default: false }
});

const List = mongoose.model<IList>('List', ListSchema);

export default List;
