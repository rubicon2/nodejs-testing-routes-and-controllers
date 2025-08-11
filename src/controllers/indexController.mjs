const array = [];

function getIndex(req, res) {
  return res.json({
    name: 'frodo',
  });
}

function getTest(req, res) {
  return res.json({ array });
}

function postTest(req, res) {
  array.push(req.body.item);
  return res.send('success!');
}

export { getIndex, getTest, postTest };
