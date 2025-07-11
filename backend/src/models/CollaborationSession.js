const CollaborationSessionSchema = new mongoose.Schema({
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
    required: true
  },
  users: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    joinedAt: {
      type: Date,
      default: Date.now
    },
    lastActivity: {
      type: Date
    }
  }],
  startedAt: {
    type: Date,
    default: Date.now
  },
  endedAt: {
    type: Date
  },
  operations: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    type: {
      type: String,
      enum: ['insert', 'delete', 'replace', 'format', 'cursor'],
      required: true
    },
    position: {
      type: Number,
      required: true
    },
    value: {
      type: mongoose.Schema.Types.Mixed
    },
    version: {
      type: Number
    }
  }],
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

CollaborationSessionSchema.index({ note: 1, active: 1 });
CollaborationSessionSchema.index({ 'users.user': 1, active: 1 });
