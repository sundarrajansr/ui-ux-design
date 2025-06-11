const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/restaurant';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
})
.then(() => {
    console.log('Successfully connected to MongoDB');
    mongoose.connection.close();
})
.catch(error => {
    console.error('MongoDB connection error:', error);
});
