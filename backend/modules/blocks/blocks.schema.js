import buildLanguageSchema from '#core/app/helpers/buildLanguageSchema.js';
import textAreaSchema from '#core/app/textArea.schema.js';
import mongoose from 'mongoose';
const body = buildLanguageSchema('body', textAreaSchema);

const schema = {
  type: { type: String, default: 'block' },
  scenario: { type: mongoose.Schema.Types.ObjectId, ref: 'Scenario', required: true },
  slide: { type: mongoose.Schema.Types.ObjectId, ref: 'Slide', required: true },
  blockType: { type: String, enum: ['TEXT', 'INPUT', 'ACTIONS'], default: 'TEXT' },
  sortOrder: { type: Number },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  ...body,
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date },
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
};

export default schema;