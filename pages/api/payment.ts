export default (req, res) => {
  const random = Math.random();
  if (random < 0.5) {
    res.statusCode = 200;
    res.json({ data: 'success' });
  } else {
    res.statusCode = 500;
    res.json({ data: 'error' });
  }
};
