import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Por favor, informe um título'],
    trim: true,
    maxlength: [100, 'O título não pode exceder 100 caracteres']
  },
  content:  { type: String, maxlength: [10000, 'O conteúdo não pode exceder 10.000 caracteres']},
  owner:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags: {
    type: [String],
    validate: {
      validator: function(tags) {
        return tags.length <= 10; 
      },
      message: 'Uma nota não pode ter mais de 10 tags'
    }
  },
  permissions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Permission'
  }],

  currentVersion: {
    type: Number,
    default: 1
  },
  
  activeSessions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CollaborationSession'
  }],

  __v: { type: Number, select: false } 
}, {timestamps: true});

NoteSchema.index({ title: 'text', content: 'text' });
NoteSchema.index({ owner: 1 });
NoteSchema.index({ 'collaborators.user': 1 });
NoteSchema.index({ tags: 1 });

NoteSchema.virtual('versionHistory', {
  ref: 'NoteVersion',
  localField: '_id',
  foreignField: 'note'
});


export default mongoose.model('Note', NoteSchema);
