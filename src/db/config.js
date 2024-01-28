const mongoose = require('mongoose');

const conection = async () => {
    try {
        const URI = process.env.DB_URI;
        await mongoose.connect(URI);
        console.log('Connected to MongoDB Cluster');
    } catch (error) {
        console.error('Unale to connect to DB: ', error);
        process.exit(1);
    }
}

module.exports = conection;