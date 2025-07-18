import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import bcrypt from 'bcryptjs'

import User from '../models/User.js'



passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return done(null, false, { error: 'Incorrect email or password' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return done(null, false, { error: 'Incorrect email or password' })
        }

        user.lastLogin = new Date()
        await user.save();
      
        done(null, user)
    } catch (error) {
        done(error)
    }
}))

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    (req) => req.cookies?.jwt,
     ExtractJwt.fromAuthHeaderAsBearerToken()]),
     secretOrKey: process.env.JWT_SECRET
};

passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.id);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));


