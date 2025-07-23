import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const checkEmailExists = async (email) => {
    const user = await User.findOne({ email });
    return !!user;
  };

export const findUserById = async (id) => {
    return await User.findById(id);
};
  
export const checkUsernameExists = async (username) => {
    const user = await User.findOne({ username });
    return !!user;
  };
  
export const registerService = async (username, email, password) => {
    const [emailExists, usernameExists] = await Promise.all([
    checkEmailExists(email),
    checkUsernameExists(username)
    ]);

    if (emailExists) {
    throw new Error('Email já existe');
    }

    if (usernameExists) {
    throw new Error('Username já existe');
    }
    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new User({
    username,
    email,
    password: passwordHash
    });

    await newUser.save();
    return newUser;
    };