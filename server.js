const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight / (height * height);
  res.setHeader("Content-Type", "text/html");
  res.write("Your BMI is " + bmi);
  if (bmi < 18.5) {
    res.write("<h1>UNDERWEIGHT</h1>");
  } else if (bmi >= 18.5 && bmi < 25) {
    res.write("<h1>HEALTHY</h1>");
  } else if (bmi >= 25 && bmi < 30) {
    res.write("<h1>OVERWEIGHT</h1>");
  } else {
    res.write("<h1>OBESE</h1>");
  }
  res.send();
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
