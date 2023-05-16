require('dotenv').config({ path: "./config.env"});
const errorHandler = require("./middleware/errorHandler");
const express = require('express');

const app = express();

app.use(express.json());

app.use("/api/mail", require('./routes/mail'));

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
 
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));