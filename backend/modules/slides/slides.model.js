import mongoose from 'mongoose';
import Schema from './slides.schema.js';

const ModelSchema = mongoose.Schema(Schema, { usePushEach: true });

ModelSchema.index({
  "name": "text"
}, { background: true });

export default ModelSchema;