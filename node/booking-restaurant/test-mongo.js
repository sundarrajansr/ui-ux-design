const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://root:example@mongodb:27017/restaurant?authSource=admin';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to MongoDB');
    mongoose.connection.close();
})
.catch(error => {
    console.error('MongoDB connection error:', error);
});
