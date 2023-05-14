require('dotenv').config({ path: "./config.env"});
const errorHandler = require("./middleware/errorHandler");
const express = require('express');
const cors = require('cors');

const allowedorigins = ['http://localhost:3000', 'http://localhost:5000'];
const app = express();

app.use(express.json());
app.use(cors({
    origin: allowedorigins
}))

app.use("/api/mail", require('./routes/mail'));

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
 
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));