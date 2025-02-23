const storage = window.localStorage;

const storeData = (key, data) => {
  storage.setItem(key, JSON.stringify(data));
};

const getData = (key) => {
  const data = storage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export { storeData, getData };