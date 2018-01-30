import mongoose from 'mongoose';

const { Schema } = mongoose;

const newsSchema = new Schema({
  id: { type: 'number', required: true },
  title: { type: 'String', required: true },
  publishDate: { type: 'String', required: true },
  about: { type: 'String', required: true },
  content: { type: 'String', required: true },
});

export default mongoose.model('News', newsSchema);
