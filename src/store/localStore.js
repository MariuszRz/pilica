const localStorageTest = () => {
  const test = 'test' + new Date().valueOf();
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

const setItem = (item, value) => {
  console.log('zapis store');
  if (localStorageTest()) {
    localStorage.setItem(item, value);
  }
};

export default setItem;
