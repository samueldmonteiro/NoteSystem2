import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: [true, 'Por favor, informe um nome de usuário'],
    unique: true,
    trim: true,
    minlength: [3, 'O nome de usuário deve ter pelo menos 3 caracteres'],
    maxlength: [30, 'O nome de usuário não pode exceder 30 caracteres'],
    match: [/^[a-zA-Z0-9_]+$/, 'Nome de usuário só pode conter letras, números e underscores']
  },
  email: { 
    type: String, 
    required: [true, 'Por favor, informe um email'],
    unique: true,
    lowercase: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Email inválido'
    }
  },
  password: { 
    type: String, 
    required: [true, 'Por favor, informe uma senha'],
    minlength: [8, 'A senha deve ter pelo menos 8 caracteres'],
    select: false 
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  lastLogin: {
    type: Date
  },
  activeSessions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CollaborationSession'
  }]
},
{timestamps: true});

UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ username: 1 }, { unique: true });

UserSchema.virtual('permissions', {
  ref: 'Permission',
  localField: '_id',
  foreignField: 'user'
});

module.exports = mongoose.model('User', UserSchema);
