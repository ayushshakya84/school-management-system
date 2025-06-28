const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./models'); // Require the main models/index.js
const seedDatabase = require('./seeders/seed');

// Routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('School Management API is running...');
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        // Seeding is for development, should not run on every start in production
        if (process.env.NODE_ENV !== 'production') {
            await seedDatabase();
        } else {
             await db.sequelize.sync(); 
        }

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database or start server:', error);
        setTimeout(startServer, 5000);
    }
};

startServer();