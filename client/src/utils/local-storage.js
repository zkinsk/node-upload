export const setLocalState = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};

export const readLocalState = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : undefined;
};
