const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const seedDatabase = require('./seeders/seed');

// Routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
// Add other role routes here later

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Simple route for checking server status
app.get('/', (req, res) => {
  res.send('School Management API is running...');
});


const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        // IMPORTANT: In a real app, you would run migrations/seeding via a separate script,
        // not on every server start. This is for demonstration purposes.
        if (process.env.NODE_ENV !== 'production') {
            await seedDatabase();
        } else {
             await sequelize.sync(); // In prod, just sync without forcing
        }

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database or start server:', error);
        // Retry connection logic for Docker startup race condition
        setTimeout(startServer, 5000);
    }
};

startServer();