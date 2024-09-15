const express = require("express");
const connectDB = require("./config/db");
const salesRoutes = require("./routes/salesRoutes");


const app = express();
app.use(express.json()); // To handle json playloads
connectDB();

// API Routes

app.use("/api/sales", salesRoutes);


app.listen(8000);
