const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, C:\Users\goodr\Documents\web development\card game)));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
