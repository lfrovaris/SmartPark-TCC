export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'E-mail não pode ser vazio.';
  if (!re.test(email)) return 'Ooops! Insira um e-mail válido.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Senha não pode ser vazia.';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Nome não pode ser vazio.';

  return '';
};
