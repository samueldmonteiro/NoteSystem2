import api from '../auth/api.jsx'; 

export const login = async (email, password) => {
  const { data } = await api.post('/auth/login', { email, password });

  const user = {
    id: data.id,
    username: data.username,
    email: data.email,
  };

  return { user, message: data.message };
}; 

export const register = async (username, email, password, confirmPassword) => {
  try {
    const { data } = await api.post('/auth/register', {
      username,
      email,
      password,
      confirmpassword: confirmPassword
    });

    if (data.user) {
      return {
        user: {
          id: data.user.id,
          username: data.user.username,
          email: data.user.email
        },
        message: data.msg
      };
    }
    throw new Error(data.msg || "Erro desconhecido no registro");
  } catch (error) {
    throw error;
  }
};


