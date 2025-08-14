export const isValidName = (name) => {
  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;
  return nameRegex.test(name) && name.length > 0;
};