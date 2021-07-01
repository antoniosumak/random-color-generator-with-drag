export const getRandomColor = (ts) => {
  return fetch(`https://www.colr.org/json/color/random?ts=${ts}`).then((res) =>
    res.json()
  );
};
