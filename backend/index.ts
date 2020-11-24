import express from "express";
const app = express();
const port = 8080;

const data = [
  { usn: "1BI17CS010", name: "Akash" },
  { usn: "1BI17CS015", name: "Anandteerth" },
  { usn: "1BI17CS005", name: "Abhishek" },
];

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
