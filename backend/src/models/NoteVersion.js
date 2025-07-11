const NoteVersionSchema = new mongoose.Schema({
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
    required: true
  },
  version: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  changes: {
    type: String,
    enum: ['create', 'update', 'restore', 'auto-save'],
    required: true
  },
  editedAt: {
    type: Date,
    default: Date.now
  },
  editedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CollaborationSession'
  }
}, {
  timestamps: true
});

NoteVersionSchema.index({ note: 1, version: -1 });
NoteVersionSchema.index({ editedBy: 1 });
NoteVersionSchema.index({ session: 1 });
