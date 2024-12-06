import mongoose from 'mongoose';

const schema = {
  type: { type: String, default: 'slide' },
  scenario: { type: mongoose.Schema.Types.ObjectId, ref: 'Scenario', required: true },
  name: { type: String, default: '', required: true },
  slideType: { type: String, enum: ['STEP', 'SUMMARY'], default: 'STEP' },
  sortOrder: { type: Number },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  isLocked: { type: Boolean, default: false },
  lockedAt: { type: Date },
  lockedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  hasDiscussion: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date },
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
};

export default schema;