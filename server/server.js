require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes=require("./routes/authRoutes");
const expenseRoutes=require("./routes/expenseRoutes");
const incomeRoutes=require('./routes/incomeRoutes');
const investmentRoutes=require('./routes/investmentRoutes');

const connectDB = require("./config/db");

const app = express();


// Connect Database
connectDB();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const allowedOrigins=[
'http://localhost:5173',
process.env.CLIENT_URL
];
app.use(
cors({
origin:allowedOrigins,
credentials:true
})
);

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use('/api/income',incomeRoutes);
app.use('/api/investments',investmentRoutes);
// Test Route
app.get("/", (req, res) => {
    res.send("FinTrack API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});