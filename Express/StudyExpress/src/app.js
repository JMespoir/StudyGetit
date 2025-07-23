import express from "express";
import moment from "moment";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
  res.send('Hello, World!');
});

app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: Date.now() });
});

app.get('/hello', (req, res) => {
  res.send('안녕하세요, Express!');
});

app.get('/api/time', (req, res) => {
  const now = moment().format("YYYY-MM-DD HH:mm:ss");
  res.status(200).json({ status: 'OK', timestamp: now});
});

app.listen(PORT, ()=>{
  console.log("Start server");
  console.log(`Server is running on https://localhost:${PORT}`);
});