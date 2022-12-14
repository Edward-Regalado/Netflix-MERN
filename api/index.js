const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
    .then(() => console.log('Connected to Mongoose DB successful!'))
    .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(8800, () => {
    console.log('backend server is running on port 8800!');
});

