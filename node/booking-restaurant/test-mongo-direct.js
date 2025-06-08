const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://root:example@localhost:27017/restaurant?authSource=admin';

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
