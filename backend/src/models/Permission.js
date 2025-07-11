const PermissionSchema = new mongoose.Schema({
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  level: {
    type: String,
    enum: ['read', 'comment', 'edit', 'owner'],
    required: true
  },
  grantedAt: {
    type: Date,
    default: Date.now
  },
  grantedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

PermissionSchema.index({ note: 1, user: 1 }, { unique: true });
PermissionSchema.index({ user: 1 });
PermissionSchema.index({ note: 1, level: 1 });