import passport from 'passport';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt.js';
import jwt from 'jsonwebtoken'
import { findUserById, registerService } from '../services/userServices.js';

export const Register = async (req, res) => {
  const {username, email, password, confirmpassword} = req.body;
  try { 
    const user = await registerService(username, email, password)
    res.status(201).json({msg: "Usuario criado com sucesso!"})
  } catch (error) {
    res.status(500).json({msg:`${error}`})
  }
}

export const Login = async (req, res) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return res.status(400).json({ 
        error: 'Você já está logado. Faça logout antes de tentar logar novamente.' 
      });
    } catch (err) {
      return res.status(400).json({ 
        error: 'Token de sessão inválido. Faça logout e tente novamente.' 
      });
    }
  }

  passport.authenticate('local', (error, user, info) => {
    if (error) {
      return res.status(500).json({ error: 'Algo deu errado ao autenticar' });
    }
    if (!user) {
      return res.status(401).json(info);
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie('jwt', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 5 * 60 * 1000 
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 
    });

    return res.status(200).json({
      message: 'Login realizado com sucesso',
      id: user._id,
      username: user.username,
      email: user.email
    });
  })(req, res);
};


export const Logout = async(req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  return res.status(200).json({ message: 'Logout realizado com sucesso' });
};

export const refreshAcessToken = async (req, res) => {

  const token = req.cookies?.refreshToken;
  if(!token) return res.status(401).json({ error: 'Refresh token ausente' });

  try {
    const payload = verifyRefreshToken(token);
    const user = await findUserById(payload.id)

    if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });

    const newAccessToken = generateAccessToken(user);

    res.cookie('jwt', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 5 * 60 * 1000
    });
    
    return res.status(200).json({ 
      accessToken: newAccessToken,
      message: 'Token renovado com sucesso' 
    });
  } catch (err) {
    return res.status(403).json({ error: 'Refresh token inválido ou expirado' });
  }
};
