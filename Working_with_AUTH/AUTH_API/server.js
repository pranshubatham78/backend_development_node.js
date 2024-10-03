const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const {protect } = require('./middleware/authMiddleware');

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // Parse the JSON bodies

//Authentication Routes

app.use('/api/auth', authRoutes);

//Protected Routes 
app.get('/api/protected', protect, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled rejection:', err.message);
    process.exit(1);
});